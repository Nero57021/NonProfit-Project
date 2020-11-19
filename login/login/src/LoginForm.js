import React from 'react';
import { Redirect , Route, Link} from 'react-router-dom'
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './stores/UserStore';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import { FormGroup, Label } from 'reactstrap';

class LoginForm extends React.Component {

    state = {
        email: '',
        password: '',
        buttonDisabled: false,
        value: false
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            buttonDisabled: false,
            value: false
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    setInputValue(property, val) {
        this.setState({
            [property]: val 
        })
    }

    resetForm() {
        this.setState({
            email: '',
            password: '',
            buttonDisabled: false
        }) 
    }

    // async componentDidMount() {
    //     const url = "http://172.20.30.172:8080/login";
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     this.setState({ value: true });
    // }



    async onSubmit(event) {
        event.preventDefault();
        const url = "http://172.20.30.172:8080/login?";
        var headers = {
            "Content-Type": "application/json",                                                                                                
            "Access-Control-Origin": "*"
         }

         var data = {
            email: this.state.email,
            password: this.state.password
        }

        var search = new URLSearchParams(data);
        search = search.toString();
        var res = search.replace("%40", "@");
        search = res;

        const response = await fetch(url + search, {
            method: 'POST',
            mode: 'no-cors',
            headers: headers,
            body: JSON.stringify(data)
        }).then(response => {
            this.setState({
                email: this.state.email,
                password: this.state.password,
                buttonDisabled: this.state.buttonDisabled,
                value: true
            }) 
        });    
    }

  render() {
    const { redirect } = this.state;

    if (this.state.value) {
      return <h1>Success!!</h1>
    }

    else {
        return (
        
            <form onSubmit={this.onSubmit} className='login-form h-100 align-items-center'>
                <h1>
                <span className="text-center text-white">CLC Login</span>
                </h1>
                <FormGroup>
                    <InputField className='email-text' type='email' placeholder = 'Email' value={this.state.email ? this.state.email : ''} onChange={(val) => this.setInputValue('email', val)}/>
                </FormGroup>
                <FormGroup>
                    <InputField className='pw-text' type='password' placeholder = 'Password' value={this.state.password ? this.state.password : ''} onChange={(val) => this.setInputValue('password', val)}/>
                </FormGroup>
                <FormGroup>
                    <SubmitButton type='submit' text='Login' color="primary" disabled={this.state.buttonDisabled}/>
                </FormGroup>
          </form>
        );
    }
  }
  
}

export default LoginForm;
