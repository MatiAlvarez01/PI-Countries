import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { orderByName } from "../../actions";

const Button = styled.button`
    margin: 2%;
`

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
        <Button onClick={handleButtonClick}>Order by name</Button>
    )
}

export default OrderByName;