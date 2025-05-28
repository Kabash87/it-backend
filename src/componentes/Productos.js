import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  ArrayInput,
  SimpleFormIterator,
  EditButton,
  DeleteButton,
  useRecordContext,
} from "react-admin";

// Opciones para el campo 'categoria'
const categoriaChoices = [
  { id: "Pizza", name: "Pizza" },
  { id: "Pasta", name: "Pasta" },
  { id: "Antipasti", name: "Antipasti" },
  { id: "Ensaladas", name: "Ensaladas" },
  { id: "Bebidas", name: "Bebidas" },
  { id: "Postres", name: "Postres" },
  { id: "Vinos", name: "Vinos" },
  { id: "Cafe", name: "Cafe" },
];

// Miniatura de la imagen
const ImagenProducto = () => {
  const record = useRecordContext();
  if (!record || !record.imagen_url) return null;

  return (
    <img
      src={record.imagen_url}
      alt={record.nombre}
      style={{ height: 50, objectFit: "cover", borderRadius: 8 }}
    />
  );
};

// LISTA
export const ProductosList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="nombre" />
      <TextField source="categoria" />
      <TextField source="precio" />
      <ImagenProducto label="Imagen" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// CREAR
export const ProductosCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="nombre" label="Nombre del producto" />
      <NumberInput source="precio" label="Precio" step={0.01} />
      <TextInput source="descripcion" label="Descripción" multiline fullWidth />
      <TextInput source="imagen_url" label="URL de la imagen" fullWidth />
      <SelectInput
        source="categoria"
        label="Categoría"
        choices={categoriaChoices}
      />
      <ArrayInput source="alergenos" label="Alérgenos">
        <SimpleFormIterator>
          <TextInput label="Alérgeno" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="ingredientes" label="Ingredientes">
        <SimpleFormIterator>
          <TextInput label="Ingrediente" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

// EDITAR
export const ProductosEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="nombre" label="Nombre del producto" />
      <NumberInput source="precio" label="Precio" step={0.01} />
      <TextInput source="descripcion" label="Descripción" multiline fullWidth />
      <TextInput source="imagen_url" label="URL de la imagen" fullWidth />
      <SelectInput
        source="categoria"
        label="Categoría"
        choices={categoriaChoices}
      />
      <ArrayInput source="alergenos" label="Alérgenos">
        <SimpleFormIterator>
          <TextInput label="Alérgeno" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="ingredientes" label="Ingredientes">
        <SimpleFormIterator>
          <TextInput label="Ingrediente" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
