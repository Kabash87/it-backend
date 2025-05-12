// Publicaciones.js
// Este componente sirve para CRUD de publicaciones
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
  DateInput,
  EditButton,
  DeleteButton,
  useRecordContext,
} from "react-admin";

// Miniatura de imagen
const ImagenPub = () => {
  const record = useRecordContext();
  if (!record || !record.imagen) return null;
  return (
    <img
      src={record.imagen}
      alt={record.titulo}
      style={{ height: 50, objectFit: "cover", borderRadius: 8 }}
    />
  );
};

// Lista de publicaciones
export const PublicacionesList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="titulo" />
      <ImagenPub label="Imagen" />
      <DateField source="fecha" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Crear publicacion
export const PublicacionesCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="titulo" label="Titulo" fullWidth />
      <TextInput source="descripcion" label="Descripcion" multiline fullWidth />
      <TextInput source="imagen" label="URL imagen" fullWidth />
      <TextInput source="enlace" label="Enlace" fullWidth />
      <DateInput source="fecha" label="Fecha" />
    </SimpleForm>
  </Create>
);

// Editar publicacion
export const PublicacionesEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="titulo" label="Titulo" fullWidth />
      <TextInput source="descripcion" label="Descripcion" multiline fullWidth />
      <TextInput source="imagen" label="URL imagen" fullWidth />
      <TextInput source="enlace" label="Enlace" fullWidth />
      <DateInput source="fecha" label="Fecha" />
    </SimpleForm>
  </Edit>
);
