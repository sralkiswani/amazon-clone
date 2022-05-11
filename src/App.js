import './App.css';
import React, {useEffect} from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";

function App() {

    const[{}, dispatch] = useStateValue();

    // Observer/Listener: refires this code
    useEffect(() => {
        // will only run once when the app component loads.
        // Listener: listens
        auth.onAuthStateChanged(authUser => {
            console.log('THE USER IS >>> ', authUser);

            // the user just loggin in / the user was logged in; if you
            // refresh the page, it will log you back in
            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })

            } else {
                // The user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                })

            }
        })
    }, [])

    return (
        // BEM
        <Router>
            <div className="app">
                {/*<Switch>*/}
                    {/*<Route path="/">*/}
                    {/*    <Header />*/}
                    {/*    <Home/>*/}
                    {/*</Route>*/}
                {/*</Switch>*/}
                {/*Load header by default*/}
                <Routes>
                    <Route path="/payment" element={[<Header />, <Payment />]}/>
                    <Route path="/login" element={[<Login />]}/>
                    <Route path="/checkout" element={ [<Header />, <Checkout />]} />
                    <Route path="/" element={[<Header />, <Home />]}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
