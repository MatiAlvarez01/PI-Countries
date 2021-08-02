import React from "react";
import styled from "styled-components";

const Button = styled.button`
    margin-left: 1%
`

function NextPage(props) {
    function handleButtonClick(){
        props.setStateStart(prevState => prevState + 9)
        props.setStateEnd(prevState => prevState + 9)
    }
    return (
        <Button onClick={handleButtonClick}>Next Page</Button>
    )
}

export default NextPage;