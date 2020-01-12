import firebase from "firebase";


export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyDnmpCJ5ZNyIf_ylwkU2s4yPYfGDlcXoeI",
    authDomain: "waterborne.firebaseapp.com",
    databaseURL: "https://waterborne.firebaseio.com",
    projectId: "waterborne",
    storageBucket: "waterborne.appspot.com",
    messagingSenderId: "816644377710"
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('firebase-sw.js')
      .then((registration) => {
        firebase.messaging().useServiceWorker(registration);
      });
  }
  console.log("done")
  return firebase;
};

export const getcapcha = () => {
  if (window.recaptchaVerifier) {
    window.recaptchaVerifier.clear();
  }
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
    phoneNumber = "+91" + phoneNumber;
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
        resolve(snapshot);
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

export const askForPermissionToReceiveNotifications = async () => {
  console.log("k");
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('user token:', token);
    firebase.database().ref('users/' + firebase.auth().currentUser.uid).update({
      token: token
    })
  } catch (error) {
    console.error(error);
  }
};

export const checkIntialized = () => {
  return firebase.apps.length;
};

export const getfirebase = () =>{
  return firebase;
}
