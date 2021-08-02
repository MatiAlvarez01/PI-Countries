import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import { searchCountriesByName } from "../../actions";

const SearchDiv = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1%;
`
const SearchInput = styled.input`
    font-size: 2rem;
    border: 0;
    border-radius: 30px;
    padding: 10px 30px;
    overflow: auto;
    outline: none;
`

function SearchByName(props) {
    const dispatch = useDispatch();

    function handleInputChange(event) {
        props.setState(event.target.value)
    }

    function handleFormSubmit(event){
        event.preventDefault();
        dispatch(searchCountriesByName(props.state))
    }

    return (
        <SearchDiv>
        <form onSubmit={handleFormSubmit}>
        <SearchInput 
            type="search"
            name="name"
            placeholder="Search by name..."
            onChange={handleInputChange}
            />
        </form>
    </SearchDiv>
    )
}

export default SearchByName;