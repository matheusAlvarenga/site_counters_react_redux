import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Counter from "../../components/counter_multi";

export default function Simples() {
    const contadores = useSelector((state) => state.counters);
    const dispatch = useDispatch();

    function mapItems(arr) {
        return arr.map((item, key) => {
            return <Counter key={key} num={key}></Counter>;
        });
    }

    return (
        <div className="App">
            <h1>Contadores Infinitos</h1>
            <div className="various">{mapItems(contadores)}</div>
            <div className="buttons">
                <Link to="/">Início</Link>
                <Link
                    onClick={() => {
                        dispatch({ type: "NEW_COUNTER" });
                    }}
                >
                    Novo Contador
                </Link>
            </div>
        </div>
    );
}
