import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
    const contador = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="counter-container">
            <div className="counter">
                <p>contador</p>
                <h2>{("0" + contador).slice(-2)}</h2>
            </div>
            <div className="buttons">
                <button
                    onClick={() => {
                        dispatch({ type: "DECREMENT" });
                    }}
                >
                    -
                </button>
                <button
                    onClick={() => {
                        dispatch({ type: "INCREMENT" });
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
}
