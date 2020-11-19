import React from 'react';
import UserStore from './stores/UserStore';
import LoginForm from './LoginForm';
import SubmitButton from './SubmitButton.js';
import { observer } from 'mobx-react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import backgroundImage from './Survey Image Aerospace.jpg';

import './App.css';

class App extends React.Component {

  // async componentDidMount() {
  //   try {
  //     let res = await fetch('http://172.20.30.172:8080/login', {
  //       method: 'post',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       }
  //     });

  //     let result = await res.json();

  //     if (result && result.success) {
  //       UserStore.loading = false;
  //       UserStore.isLoggedIn = true;
  //       UserStore.username = result.username;
  //     }
  //     else {
  //       UserStore.loading = false;
  //       UserStore.isLoggedIn = false;

  //     }
  //   } 
  //   catch (e) {
  //     UserStore.loading = false;
  //     UserStore.isLoggedIn = false;
  //   }

  // }

  // async doLogout() {
  //   try {
  //     let res = await fetch('/logout', {
  //       method: 'post',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       }
  //     });

  //     let result = await res.json();

  //     if (result && result.success) {
  //       UserStore.isLoggedIn = false;
  //       UserStore.username = '';
  //     }
  //   } 
  //   catch (e) {
  //     console.log(e);
  //   }

  // }

  render() {
      return (
        <div className='App inner-container' style={{ backgroundImage: 'url(' + backgroundImage + ')', backgroundRepeat: 'no-repeat' }}>
          <nav className="navbar navbar-light bg-danger">  
            <img id="logo" src="CLC Logo.png" />
          </nav>

          <LoginForm />
        </div>
      );
    }
}

export default observer(App);
