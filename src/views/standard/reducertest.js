import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as action from "../../redux/action/standardAction"

const Test = () => {
    const dispatch = useDispatch()
    const { count } = useSelector((state) => state.standard)
    return (
        <div >
            <button onClick={() => dispatch(action.increaseCount())}>+</button>
            <button onClick={() => dispatch(action.decreaseCount())}>-</button>
            <Link to={"/"} >이동</Link>
            {count}
        </div>
    );
};

export default Test;