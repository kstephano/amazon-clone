import React, { useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';

import { auth } from '../firebase';
import '../css/Login.css'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                // send user to home page if successfully authenticated and created new user
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to='/'>
                <img 
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                    alt="Amazon Logo" 
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>Email</h5>
                    <input 
                        type="text"
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input 
                        type="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button 
                        className="login__sign-in-button"
                        type="submit"
                        onClick={signIn}
                    >Sign In</button>
                </form>

                <p>
                    By signing in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice,
                    Please see our Privacy Notice, our Cookies notice and our Interest-Based Ads Notice.
                </p>

                <button 
                    className="login__register-button"
                    onClick={register}
                >Create your Amazon Account</button>
            </div>
        </div>

        
    )
}

export default Login
