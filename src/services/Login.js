import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const LoginWithEmailPassword = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
  } catch (error) {
    console.log(error);
    return false;
  }
};
