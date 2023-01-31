import { useState } from "react";

import "./Counter.scss";

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const inc = () => {
        setCounter(counter + 1);
    };
    const dec = () => {
        setCounter(counter - 1);
    };

    return (
        <div>
            <h1>Счетчик: {counter}</h1>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    );
};
