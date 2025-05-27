import React from "react";
import { Admin, Resource } from "react-admin";
import { dataProvider, authProvider } from "./providers";
import { CouponList, CouponCreate, CouponEdit } from "./componentes/coupons";
import { RedemptionList } from "./componentes/redemptions";

import {
  ProductosList,
  ProductosEdit,
  ProductosCreate,
} from "./componentes/Productos";

import {
  PromocionesList,
  PromocionesCreate,
  PromocionesEdit,
} from "./componentes/Promociones";

import {
  PublicacionesList,
  PublicacionesCreate,
  PublicacionesEdit,
} from "./componentes/Publicaciones";

import Dashboard from "./componentes/Dashboard";
import Login from "./componentes/Login";

function App() {
  return (
    <Admin
      dashboard={Dashboard}
      loginPage={Login}
      dataProvider={dataProvider}
      authProvider={authProvider}
      disableTelemetry
    >
      <Resource
        name="productos"
        list={ProductosList}
        edit={ProductosEdit}
        create={ProductosCreate}
      />
      <Resource
        name="promociones"
        list={PromocionesList}
        create={PromocionesCreate}
        edit={PromocionesEdit}
      />
      <Resource
        name="publicaciones"
        list={PublicacionesList}
        create={PublicacionesCreate}
        edit={PublicacionesEdit}
      />
      <Resource
        name="coupons"
        list={CouponList}
        create={CouponCreate}
        edit={CouponEdit}
        options={{ label: "Cupones" }}
      />
      <Resource
        name="redemptions"
        list={RedemptionList}
        options={{ label: "Canjeados" }}
      />
    </Admin>
  );
}

export default App;
