import firebase from "firebase";
import {
  resolve
} from "path";

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyDnmpCJ5ZNyIf_ylwkU2s4yPYfGDlcXoeI",
    authDomain: "water-borne.firebaseapp.com",
    databaseURL: "https://waterborne.firebaseio.com",
    projectId: "water-borne",
    storageBucket: "water-borne.appspot.com",
    messagingSenderId: "193288626620"
  });
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("capcha", {
    size: "normal",
    callback: function (response) {
      return response;
    }
  });
};

export const getcapcha = () => {
  window.recaptchaVerifier.clear();
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("capcha", {
    size: "normal",
    callback: function (response) {
      console.log("response", response);
    }
  });
  window.recaptchaVerifier.render().then(function (widgetId) {
    window.recaptchaWidgetId = widgetId;
  });
};

export const sendotp = (phoneNumber, islogin) => {
  const myPromise = new Promise((resolve, reject) => {
    firebase
      .database()
      .ref("users")
      .orderByChild("phone")
      .equalTo(phoneNumber)
      .once("value")
      .then(snapshot => {
        console.log(snapshot.val());
        if (!snapshot.val() && !islogin) {
          reject();
        } else {
          var appVerifier = window.recaptchaVerifier;
          firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
              window.confirmationResult = confirmationResult;
              resolve();
            })
            .catch(function (error) {
              console.log("error", error);
              reject();
            });
        }
      });

  });

  return myPromise;
};

export const confirmotp = code => {
  const myPromise = new Promise((resolve, reject) => {
    window.confirmationResult
      .confirm(code)
      .then(function (result) {
        resolve(result.user.uid);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return myPromise;
};

export const register = (info, uid) => {
  const myPromise = new Promise((resolve, reject) => {
    firebase.database().ref('users').child(uid).set(info).then((snapshot) => {
      resolve();
    }).catch((error) => {
      console.log(error);
      reject();
    })
  });
  return myPromise;
}

export const getcurrentuser = () => {
  const myPromise = new Promise((resolve, reject) => {
    if (firebase.auth().currentUser !== null) {
      firebase.database().ref('users/' + firebase.auth().currentUser.uid).once('value').then((snapshot) => {
        resolve(snapshot.val());
      }).catch((error) => {
        console.log(error);
        reject();
      })
    } else {
      reject();
    }
  });
  return myPromise;
}