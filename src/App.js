import logo from "./logo.svg";
import "./App.css";
import Example from "./example";
import React, { useEffect, useState } from "react";
function App() {
    const [state, setstate] = useState(0);
    function add() {
        let num = state + 1;
        setstate(num++);
    }
    useEffect(() => {
        console.log(2);
        return () => {
            console.log(1);
        };
    }, [state]);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {state}
                </a>
                <button onClick={add}>add</button>
                <Example></Example>
            </header>
        </div>
    );
}

export default App;
