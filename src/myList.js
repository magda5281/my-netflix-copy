import firebase from 'firebase/app';
import db, { auth } from './firebase';

// Helpers for the signed-in user's "My List" (stored in users/<uid>.favourites).
// set(..., { merge: true }) also works if the user's document doesn't exist yet.
const userDoc = () => db.collection('users').doc(auth.currentUser.uid);

export const addToList = (movie) =>
  userDoc()
    .set({ favourites: firebase.firestore.FieldValue.arrayUnion(movie) }, { merge: true })
    .catch((err) => console.error('Could not add to My List:', err));

export const removeFromList = (movie) =>
  userDoc()
    .update({ favourites: firebase.firestore.FieldValue.arrayRemove(movie) })
    .catch((err) => console.error('Could not remove from My List:', err));
