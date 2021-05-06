import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsTrashFill } from "react-icons/bs";

export default function Counter({ num }) {
    const contador = useSelector((state) => state.counters[num]);

    const dispatch = useDispatch();
    return (
        <div
            className={`counter-container ${
                contador === undefined && "display-none"
            }`}
        >
            <div className="counter">
                <p>contador</p>
                <h2>{("0" + contador).slice(-2)}</h2>
            </div>
            <div className="buttons">
                <button
                    onClick={() => {
                        dispatch({ type: "DECREMENT_MULTI", payload: num });
                    }}
                >
                    -
                </button>
                <button
                    onClick={() => {
                        dispatch({ type: "INCREMENT_MULTI", payload: num });
                    }}
                >
                    +
                </button>
                <button
                    onClick={() => {
                        dispatch({ type: "DELETE_COUNTER", payload: num });
                    }}
                >
                    <BsTrashFill></BsTrashFill>
                </button>
            </div>
        </div>
    );
}
