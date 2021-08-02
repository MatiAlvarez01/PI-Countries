import React from "react";
import { useDispatch } from "react-redux";
import { orderByName } from "../../actions";

function OrderByName(props) {
    const dispatch = useDispatch();
    
    function handleButtonClick() {
        if (props.state === "ASC") {
            dispatch(orderByName(props.state));
            return props.setStateName("DESC");
        } else if (props.state === "DESC") {
            dispatch(orderByName(props.state));
            return props.setStateName("ASC");
        }
    }
    return (
        <button onClick={handleButtonClick}>Order by name</button>
    )
}

export default OrderByName;