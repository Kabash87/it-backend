import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from "react-admin-firebase";
import firebaseConfig from "./firebaseConfig";

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Opciones: solo logging, sin rootRef (“data” apuntaba a una colección)
const options = {
  logging: true,
  // rootRef: 'coleccion/documento'
};

export const dataProvider = FirebaseDataProvider(firebaseConfig, options);
export const authProvider = FirebaseAuthProvider(firebaseConfig, options);
