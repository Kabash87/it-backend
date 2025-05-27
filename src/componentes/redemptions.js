import React from "react";
import { List, Datagrid, TextField, DateField } from "react-admin";

// Lista de canjes
export const RedemptionList = (props) => (
  <List {...props} title="Cupones Canjeados">
    <Datagrid>
      <TextField source="couponId" label="ID Cupón" />
      <TextField source="couponName" label="Nombre Cupón" />
      <DateField source="redeemedAt" label="Fecha Canjeo" showTime />
    </Datagrid>
  </List>
);
