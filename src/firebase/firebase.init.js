import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebbase.config";

const firebaseInit = () => {
  return initializeApp(firebaseConfig);
};

export default firebaseInit;