import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
    return (
        <div className="App">
            <h1>Contadores React + Redux</h1>
            <div className="buttons">
                <Link to="/simples">Contador Simples</Link>
                <Link to="/infinitos">Contadores Infinitos</Link>
            </div>
        </div>
    );
}
