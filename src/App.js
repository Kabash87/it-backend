import React from "react";
import { Admin, Resource } from "react-admin";
import { dataProvider, authProvider } from "./providers";

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

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
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
    </Admin>
  );
}

export default App;
