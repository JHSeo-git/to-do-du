import firebase from "firebase/app";

export const getStringToAuthProvider = (provider: string) => {
  let authProvider: firebase.auth.AuthProvider | null = null;
  if (provider === "github") {
    authProvider = new firebase.auth.GithubAuthProvider();
  } else if (provider === "google") {
    authProvider = new firebase.auth.GoogleAuthProvider();
  } else if (provider === "facebook") {
    authProvider = new firebase.auth.FacebookAuthProvider();
  }

  return authProvider;
};
