import './App.css';
import React from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"

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
                <Header />
                <Routes>
                    <Route path="/checkout" element={ [<Checkout />]} />
                    <Route path="/" element={[<Home />]}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
