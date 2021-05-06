import React from "react";
import { Link } from "react-router-dom";

import Counter from "../../components/counter";

export default function Simples() {
    return (
        <div className="App">
            <h1>Contador Simples</h1>
            <Counter></Counter>
            <div className="buttons">
                <Link to="/">Início</Link>
            </div>
        </div>
    );
}
