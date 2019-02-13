import firebase from 'firebase';
import {
    resolve
} from 'path';

export const initializeFirebase = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyDnmpCJ5ZNyIf_ylwkU2s4yPYfGDlcXoeI",
        authDomain: "water-borne.firebaseapp.com",
        databaseURL: "https://water-borne.firebaseio.com",
        projectId: "water-borne",
        storageBucket: "water-borne.appspot.com",
        messagingSenderId: "193288626620"
    });
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('capcha', {
        'size': 'normal',
        'callback': function (response) {
            return response;
        }
    });

};

export const getcapcha = () => {
    window.recaptchaVerifier.clear();
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('capcha', {
        'size': 'normal',
        'callback': function (response) {
            console.log("response", response);
        }
    });
    window.recaptchaVerifier.render().then(function (widgetId) {
        window.recaptchaWidgetId = widgetId;
    });

}

export const sendotp = (phoneNumber) => {
    const myPromise = new Promise((resolve, reject) => {
        var appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
                window.confirmationResult = confirmationResult;
                resolve();
            }).catch(function (error) {
                console.log("error", error);
                reject();
            });
    })

    return myPromise;

}

export const confirmotp = (code) => {
    window.confirmationResult.confirm(code).then(function (result) {
        console.log("sucess",result.user);
        var user = result.user;
        // ...
    }).catch(function (error) {
        // User couldn't sign in (bad verification code?)
        // ...
    });
}