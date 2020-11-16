import { authService, firebaseInstance } from "fBase";

export const socialLogin = (provider: string) => {
  console.log("run");
  let fbProvider = new firebaseInstance.auth.GoogleAuthProvider();

  if (provider === "google") {
    fbProvider = new firebaseInstance.auth.GoogleAuthProvider();
  } else if (provider === "github") {
    fbProvider = new firebaseInstance.auth.GithubAuthProvider();
  }

  return authService.signInWithPopup(fbProvider);
};
