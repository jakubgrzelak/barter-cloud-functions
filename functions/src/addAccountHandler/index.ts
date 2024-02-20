import { firestore } from "firebase-admin";

export const addAccountHandler = (user: any) => {
  const id = user.uid;
  const userObject = JSON.parse(JSON.stringify(user));

  return firestore()
    .collection("users")
    .doc(id)
    .set({ uid: id, ...userObject });
};
