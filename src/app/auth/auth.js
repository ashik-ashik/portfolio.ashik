import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const authorization = () => {
  const auth = getAuth();
  const login = ({email, password}) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user
    })
    .catch((err) => {
      const code = err.code;
      const msg = err.message;
      return {code, msg}
    });
  }
  return {
    login,

  };
};
export default authorization;