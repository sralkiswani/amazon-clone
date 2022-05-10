import React, {useState} from "react";
import "./Login.css";
import {Link, useNavigate} from "react-router-dom";
import {auth} from "./firebase";

function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        // Prevent page from refreshing
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            history("/");
        }).catch(error => alert(error.message));

        // some fancy firebase loginnnnnnn shitttttttttt.......
    }
    
    const register = (e) => {
        // Prevent page from refreshing
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            // if successfully created a new user with email and password
            if (auth) {
                history("/")
            }

        }).catch(error => alert(error.message));


        // some fancy firebase register shitttttttttt.......
    }

    return (
        <div className="login">
            <Link to={"/"}>
            <img className="login__logo"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type={"text"} value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type={"password"} value = {password} onChange={e => setPassword(e.target.value)}/>

                    {/*submit: pressing enter */}
                    <button type={"submit"} onClick={signIn} className="login__signInButton">Sign In</button>

                </form>
                <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>

            </div>

        </div>
    )

}

export default Login;