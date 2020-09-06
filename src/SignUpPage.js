import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import './styles.css'
import firebase from "./Utils/firebase"
import logo from "./Utils/images/logo.jpg";
class SignUpPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: false,
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }
    resetForm() {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }

    onSubmithandler = (event) => {
        event.preventDefault();
        const { firstName, lastName, email, password } = this.state;

        let templateParams = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password
        }

        //Posting data on API

        fetch("https://reqres.in/api/register", { //Using fetch method
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(templateParams)

        }).then(result => result.json()).then(result => {
            //Checking if the result has thrown an error or not
            if (!result.error) {
                alert(`Welcome, ${templateParams.first_name}! Your Id is ${result.id} and tokenNo is ${result.token}`)
            } else {
                alert(result.error);
            }
        });
        //reseting the form after user clicks signup
        this.resetForm()

    }

    //When the user types in the form, the changes will be displayed by changing
    //the state 
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    //When user logs in through firebase
    //the setState method will toggle the isSignedIn var
    componentDidMount = () => {
        firebase.auth.onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
        })
    }



    render() {
        return (
            <div>
                <div>
                    <img src={logo} alt="Avatar" className="avatar"/>
                </div>

                <div className="App">
                    {this.state.isSignedIn ? (
                         //If the user is signed in through firebase, his name
                         // along with his picture will be displayed.
                         //Along with a sign out button
                        <span>
                            <div>Signed In!</div>
                            <h1>Welcome {firebase.auth.currentUser.displayName}</h1>
                            <img
                                alt="profile picture"
                                src={firebase.auth.currentUser.photoURL}
                            />
                            <button onClick={() => firebase.auth.signOut()}>Sign out!</button>
                        </span>
                    ) :
                        (
                            //If the user is not signed in this form will be displayed
                            <div>
                                <h4 className="text1">Sign Up</h4>
                                <h2 className="text2">Create Your Account</h2>

                                <Form onSubmit={this.onSubmithandler}>
                                    <div className="form-row cell">
                                        <div className="col">
                                            <button onClick={firebase.signInWithGoogle}>SignUp with Google</button>
                                        </div>
                                        <div className="col">
                                            <button onClick={firebase.signInWithFacebook}>SignUp with Facebook</button>
                                        </div>
                                    </div>
                                    <Form.Group>
                                        <Form.Control id="firstName" name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control id="lastName" name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Email ID" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                                    </Form.Group>
                                    <p>By clicking sign up, you agree to our Terms of use and out privacy policy</p>
                                    <button type="submit" disabled={this.state.disabled}>
                                        Sign Up
                                    </button>
                                </Form>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    };
}

export default SignUpPage;


