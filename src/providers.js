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

const options = {
  logging: true,
  rootRef: "",
  watch: [
    "productos",
    "promociones",
    "publicaciones",
    "coupons",
    "redemptions",
  ],
};

export const dataProvider = FirebaseDataProvider(firebaseConfig, options);
export const authProvider = FirebaseAuthProvider(firebaseConfig, options);
