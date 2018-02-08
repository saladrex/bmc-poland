import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor() { }

  login(user) {
    return firebase.auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(newUser => console.log(newUser));
  }

  register(user) {
    return firebase.auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(newUser => {
      firebase.database()
      .ref('/accounts')
      .child(newUser.uid)
      .set({
        name: user.name,
        email: user.email
      });
    });
  }

  recover(user) {
    return firebase.auth().sendPasswordResetEmail(user.email);
  }

}
