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
  useRecordContext,
} from "react-admin";

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
  </>
);

/** Lista */
export const PublicacionesList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="titulo" />
      <ImagenPub label="Imagen" />
      <DateField source="createdate" showTime label="Fecha y hora" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

/** Crear */
export const PublicacionesCreate = () => (
  <Create>
    {/* SimpleForm permite usar validaciones y otras características */}
    <SimpleForm>
      <PublicacionForm />
    </SimpleForm>
  </Create>
);

/** Editar */
export const PublicacionesEdit = () => (
  <Edit>
    <SimpleForm>
      <PublicacionForm />
    </SimpleForm>
  </Edit>
);
