import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDOEbvKENCK7mtNvFHhVVSL_1cIY2wdh5M",
    authDomain: "expensify-10155.firebaseapp.com",
    databaseURL: "https://expensify-10155.firebaseio.com",
    projectId: "expensify-10155",
    storageBucket: "expensify-10155.appspot.com",
    messagingSenderId: "601851679206",
    appId: "1:601851679206:web:9e2b7aecb57e098f6b8627"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.database().ref().set({
      name: 'Taslim A Hussain'
  });