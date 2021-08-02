import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { filterByRegion } from "../../actions";

const Form = styled.form`
    width: 100%;
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

function FilterByRegion(props) {
    const dispatch = useDispatch();

    function handleFormSubmit(event) {
        event.preventDefault();
        dispatch(filterByRegion(props.state));

    }
    function handleSelectChange(event) {
        props.setState(event.target.value)
    }

    return (
        <Form onSubmit={handleFormSubmit}>
        <Label>Filter by Region: 
            <Select value={props.state} onChange={handleSelectChange}>
                <Option value="all">None</Option>
                <Option value="Africa">Africa</Option>
                <Option value="Americas">Americas</Option>
                <Option value="Asia">Asia</Option>
                <Option value="Europe">Europe</Option>
                <Option value="Oceania">Oceania</Option>
                <Option value="Polar">Polar</Option>
            </Select>
        </Label>
        <Button type="submit" value="Submit">Filter</Button>
    </Form>
    )
}

export default FilterByRegion;