import { useState } from "react";

import classes from "./Counter.module.scss";

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
            <button className={classes.btn} onClick={inc}>
                +
            </button>
            <button className={classes.btn} onClick={dec}>
                -
            </button>
        </div>
    );
};
