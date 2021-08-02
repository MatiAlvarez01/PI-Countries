import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { orderByPopulation } from "../../actions";

const Button = styled.button`
    margin: 2%;
`

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
        <Button onClick={handleButtonClick}>Order by population</Button>
    )
}

export default OrderByPopulation;