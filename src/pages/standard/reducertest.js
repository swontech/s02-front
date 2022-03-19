import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { increament, decreament } from "../../redux/reducers/standardReducer"

const Test = () => {
    const dispatch = useDispatch()
    const { count } = useSelector((state) => state.standard)
    return (
        <div >
            <button onClick={() => dispatch(increament())}>+</button>
            <button onClick={() => dispatch(decreament())}>-</button>
            <Link to={"/"} >이동</Link>
            {count}
        </div>
    );
};

export default Test;