importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyDnmpCJ5ZNyIf_ylwkU2s4yPYfGDlcXoeI",
    authDomain: "waterborne.firebaseapp.com",
    databaseURL: "https://waterborne.firebaseio.com",
    projectId: "waterborne",
    storageBucket: "waterborne.appspot.com",
    messagingSenderId: "816644377710"
  });
const messaging = firebase.messaging();