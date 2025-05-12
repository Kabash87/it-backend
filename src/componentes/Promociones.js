// Promociones.js
// Esto se usa para CRUD de la coleccion promociones
import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  EditButton,
  DeleteButton,
  useRecordContext,
} from "react-admin";

// Componente que sirve para mostrar miniatura de imagen
const ImagenPromo = () => {
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

// Lista de promociones
export const PromocionesList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="titulo" />
      <ImagenPromo label="Imagen" />
      <TextField source="enlace" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Crear promocion
export const PromocionesCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="titulo" label="Titulo" fullWidth />
      <TextInput source="imagen" label="URL imagen" fullWidth />
      <TextInput source="enlace" label="Enlace" fullWidth />
    </SimpleForm>
  </Create>
);

// Editar promocion
export const PromocionesEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="titulo" label="Titulo" fullWidth />
      <TextInput source="imagen" label="URL imagen" fullWidth />
      <TextInput source="enlace" label="Enlace" fullWidth />
    </SimpleForm>
  </Edit>
);
