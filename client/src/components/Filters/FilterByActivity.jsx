import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { filterByActivity } from "../../actions";

const Form = styled.form`
    width: 80%;
    padding: 2%;
    text-align: center;
`

const Label = styled.label`
    margin: 1%;
`
const Select = styled.select`
    margin-left: 2%;
`
const Option = styled.option`

`
const Button = styled.button`
    margin-left: 1%
`

function FilterByActivity(props) {
    const activities = useSelector(state => state.activitiesList);
    const dispatch = useDispatch();

    function handleFormSubmit(event) {
        event.preventDefault();
        dispatch(filterByActivity(props.state));
        
    }
    function handleSelectChange(event) {
        props.setState(event.target.value)
    }

    console.log("activities: ", activities) //El problema del undefined

    return (
        <Form onSubmit={handleFormSubmit}>
        <Label>Filter by Activity: 
            <Select value={props.state} onChange={handleSelectChange}>
                <Option value="all">None</Option>
                {activities?.length ? 
                activities?.map(activity => <Option key={activity.id} value={activity.name}>{activity.name}</Option>) :
                <Option value="all">No activity created</Option>}
            </Select>
        </Label>
        <Button type="submit" value="Submit">Filter</Button>
    </Form>
    )
}

export default FilterByActivity;