import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import { searchCountriesByName } from "../../actions";

const SearchDiv = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 1%;
    width: 70%;
`
const SearchInput = styled.input`
    border: 0;
    border-radius: 30px;
    font-size: 2rem;
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