import './App.css';
import React from "react";
import Header from "./Header";
import Home from "./Home";
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

                <Routes>
                    <Route path="/checkout" element={ [<Header />, <h1>I am a checkout page</h1>]} />
                    <Route path="/" element={[<Header />, <Home />]}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
