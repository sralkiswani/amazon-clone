import './App.css';
import React from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"
import Login from "./Login"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
                    <Route path="/login" element={[<Login />]}/>
                    <Route path="/checkout" element={ [<Header />, <Checkout />]} />
                    <Route path="/" element={[<Header />, <Home />]}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
