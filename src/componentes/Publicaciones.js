import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  EditButton,
  DeleteButton,
  DateTimeInput,
  useRecordContext,
} from "react-admin";
import { Timestamp } from "firebase/firestore";

const toFirestoreTimestamp = (value) => {
  if (!value) return null;

  // Si viene un Timestamp de Firestore, lo devolvemos directo
  if (value instanceof Timestamp) {
    return value;
  }

  if (typeof value.toJSDate === "function") {
    return Timestamp.fromDate(value.toJSDate());
  }

  const date = value instanceof Date ? value : new Date(value);
  return isNaN(date.getTime()) ? null : Timestamp.fromDate(date);
};

const transformFecha = (data) => ({
  ...data,
  fecha: toFirestoreTimestamp(data.fecha),
});

const DateTimeInputFirebase = (props) => (
  <DateTimeInput
    {...props}
    format={(value) => {
      if (!value) return "";
      // Timestamp de Firestore
      if (value.toDate) return value.toDate();
      // Luxon DateTime
      if (typeof value.toJSDate === "function") return value.toJSDate();
      // JS Date o string
      const d = value instanceof Date ? value : new Date(value);
      return isNaN(d.getTime()) ? "" : d;
    }}
    parse={(value) => toFirestoreTimestamp(value)}
  />
);

/**
 * Miniatura de imagen
 */
const ImagenPub = () => {
  const record = useRecordContext();
  if (!record || !record.imagen) return null;
  return (
    <img
      src={record.imagen}
      alt={record.titulo}
      style={{ height: 50, objectFit: "cover", borderRadius: 4 }}
    />
  );
};

const PublicacionForm = () => (
  <>
    <TextInput source="titulo" label="Título" fullWidth />
    <TextInput source="descripcion" label="Descripción" multiline fullWidth />
    <TextInput source="imagen" label="URL de la imagen" fullWidth />
    <TextInput source="enlace" label="Enlace" fullWidth />
    <DateTimeInputFirebase source="fecha" label="Fecha y hora" />
  </>
);

/** Lista */
export const PublicacionesList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="titulo" />
      <ImagenPub label="Imagen" />
      <DateField source="fecha" showTime label="Fecha y hora" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

/** Crear */
export const PublicacionesCreate = () => (
  <Create transform={transformFecha}>
    <SimpleForm>
      <PublicacionForm />
    </SimpleForm>
  </Create>
);

/** Editar */
export const PublicacionesEdit = () => (
  <Edit transform={transformFecha}>
    <SimpleForm>
      <PublicacionForm />
    </SimpleForm>
  </Edit>
);
