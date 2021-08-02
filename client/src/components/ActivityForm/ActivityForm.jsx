import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createNewActivity } from "../../actions";

const StyledForm = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
`
const Label = styled.label`
    font-size: 2.5rem;
    margin: 3%;
`
const Input = styled.input`
    font-size: 2rem;
    margin: 1% ;
`
const Button = styled.button`
    font-size: 1.5rem;
    margin: 3%;
`
const OptionsSpan = styled.span`
    font-size: 20px
`

function ActivityForm(props) {
    const dispatch = useDispatch();

    function onInputChange(event) {
        props.setState(prevState => {
            return {
                ...prevState,
                [event.target.name] : event.target.value
            }
        })
    }

    function submitNewActivity(event) {
        event.preventDefault();
        dispatch(createNewActivity(props.state))
    }

    return (
        <StyledForm onSubmit={submitNewActivity}>
        <Label>Name:</Label>
            <Input 
                type="text" 
                name="name" 
                value={props.state.name} 
                onChange={onInputChange}/>
        <Label>Difficulty:<br/><OptionsSpan>(1, 2, 3, 4, 5)</OptionsSpan></Label>
        <Input 
            type="text" 
            name="difficulty" 
            value={props.state.difficulty} 
            onChange={onInputChange}/>
        <Label>Duration:</Label>
        <Input 
            type="text" 
            name="duration" 
            value={props.state.duration} 
            onChange={onInputChange}/>
        <Label>Season: <br/><OptionsSpan>(Summer, Autumn, Winter, Spring)</OptionsSpan></Label>
        <Input 
            type="text" 
            name="season" 
            value={props.state.season} 
            onChange={onInputChange}/>
        <Button type="submit">Create</Button>
    </StyledForm>
    )
}

export default ActivityForm;