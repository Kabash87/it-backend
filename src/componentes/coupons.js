import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  BooleanField,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  required,
  minValue,
  useRecordContext,
  FieldProps,
} from "react-admin";

const mustBeInteger =
  (message = "Debe ser un número entero") =>
  (value: any) =>
    value != null && !Number.isInteger(Number(value)) ? message : undefined;

// Componente para mostrar DDMMYYYY como dd/mm/yyyy
export const DdmmyyyyField: React.FC<FieldProps> = ({ source, label }) => {
  const record = useRecordContext();
  if (!record) return null;

  // Asegurarse de tener 8 dígitos ("4062025" → "04062025")
  const raw = String(record[source]).padStart(8, "0");
  const dd = raw.slice(0, 2);
  const mm = raw.slice(2, 4);
  const yyyy = raw.slice(4, 8);

  return <span>{`${dd}/${mm}/${yyyy}`}</span>;
};

// Lista de cupones
export const CouponList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="description" />
      <ImageField source="imageUrl" label="Imagen" />
      <DdmmyyyyField source="startDate" label="Inicio" />
      <DdmmyyyyField source="endDate" label="Vence" />
      <BooleanField source="show" label="Mostrar" />
    </Datagrid>
  </List>
);

// Crear cupón
export const CouponCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="description" validate={required()} />
      <TextInput source="imageUrl" validate={required()} />

      <NumberInput
        source="startDate"
        label="Fecha inicio (DDMMYYYY)"
        validate={[required(), mustBeInteger(), minValue(0)]}
        options={{ step: 1, min: 0 }}
      />

      <NumberInput
        source="endDate"
        label="Fecha fin (DDMMYYYY)"
        validate={[required(), mustBeInteger(), minValue(0)]}
        options={{ step: 1, min: 0 }}
      />

      <BooleanInput source="show" label="Mostrar oferta" defaultValue={true} />
    </SimpleForm>
  </Create>
);

// Editar cupón
export const CouponEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="description" validate={required()} />
      <TextInput source="imageUrl" validate={required()} />

      <NumberInput
        source="startDate"
        label="Fecha inicio (DDMMYYYY)"
        validate={[required(), mustBeInteger(), minValue(0)]}
        options={{ step: 1, min: 0 }}
      />

      <NumberInput
        source="endDate"
        label="Fecha fin (DDMMYYYY)"
        validate={[required(), mustBeInteger(), minValue(0)]}
        options={{ step: 1, min: 0 }}
      />

      <BooleanInput source="show" label="Mostrar oferta" />
    </SimpleForm>
  </Edit>
);
