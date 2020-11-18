import firebase from "firebase/app";
import { firebaseInstance } from "fBase";

export const getStringToAuthProvider = (provider: string) => {
  let authProvider: firebase.auth.AuthProvider | null = null;
  if (provider === "Github") {
    authProvider = new firebaseInstance.auth.GithubAuthProvider();
  } else if (provider === "Google") {
    authProvider = new firebaseInstance.auth.GoogleAuthProvider();
  } else if (provider === "Facebook") {
    authProvider = new firebaseInstance.auth.FacebookAuthProvider();
  }
  return authProvider;
};
