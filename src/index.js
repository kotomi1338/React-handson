import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login'

var firebaseConfig = {
  apiKey: "AIzaSyBdhfIrUZqAhjQLl-qAuqcffAaqJ3TjyvM",
  authDomain: "react-handson-test-kotomin.firebaseapp.com",
  databaseURL: "https://react-handson-test-kotomin.firebaseio.com",
  projectId: "react-handson-test-kotomin",
  storageBucket: "",
  messagingSenderId: "973140310841",
  appId: "1:973140310841:web:e5d162f5036c46fa2f46e8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Home = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/login" component={Login} />
  </Switch>
)

ReactDOM.render(<Router><Home /></Router>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
