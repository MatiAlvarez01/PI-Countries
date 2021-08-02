import React from "react";

function NextPage(props) {
    function handleButtonClick(){
        props.setStateStart(prevState => prevState + 9)
        props.setStateEnd(prevState => prevState + 9)
    }
    return (
        <button onClick={handleButtonClick}>Next Page</button>
    )
}

export default NextPage;