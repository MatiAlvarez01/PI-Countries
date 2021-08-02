import React from "react";
import { useDispatch } from "react-redux";
import { orderByPopulation } from "../../actions";

function OrderByPopulation(props) {
    const dispatch = useDispatch();

    function handleButtonClick(){
        if(props.state === "ASC") {
            dispatch(orderByPopulation(props.state));
            return props.setStatePopulation("DESC");
        } else if (props.state === "DESC") {
            dispatch(orderByPopulation(props.state));
            return props.setStatePopulation("ASC");
        }
    }

    return (
        <button onClick={handleButtonClick}>Order by population</button>
    )
}

export default OrderByPopulation;