/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AppNavigator from '../BookShelf/src/Navigator/AppNavigator';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAC8wE-FYiTKdAeCZlETJQnofjZ102JaqI",
    authDomain: "helloworld-c4437.firebaseapp.com",
    databaseURL: "https://helloworld-c4437.firebaseio.com",
    projectId: "helloworld-c4437",
    storageBucket: "helloworld-c4437.appspot.com",
    messagingSenderId: "205978830737",
    appId: "1:205978830737:web:ac52c7906bc8bbbc263c30"
  };

  firebase.initializeApp(firebaseConfig);

export default function App() {
    return (
        <AppNavigator/>
    );
}