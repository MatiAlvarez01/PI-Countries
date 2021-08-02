import React from "react";
import { useDispatch } from "react-redux";
import { filterByRegion } from "../../actions";

function FilterByRegion(props) {
    const dispatch = useDispatch();

    function handleFormSubmit(event) {
        event.preventDefault();
        dispatch(filterByRegion(props.state));

    }
    function handleSelectChange(event) {
        props.setRegion(event.target.value)
    }

    return (
        <form onSubmit={handleFormSubmit}>
        <label>Filter by Region: 
            <select value={props.state} onChange={handleSelectChange}>
                <option value="all">None</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Polar">Polar</option>
            </select>
        </label>
        <button type="submit" value="Submit">Filter</button>
    </form>
    )
}

export default FilterByRegion;