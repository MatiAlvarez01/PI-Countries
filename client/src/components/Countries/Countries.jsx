import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components"
import Country from "../Country/Country";
import { searchCountriesByName, orderByName, orderByPopulation } from "../../actions";

const StyledLink = styled(Link)`
    color: black;
    margin: 1%;
    text-decoration: none;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    };
`;

const PageSection = styled.section`
`
const TopSection = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background-color: #D2EFFA;
`
const ResultSection = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    background-color: #D2EFFA;
`
const FiltersSection = styled.section`
    width: 50vh;
    background-color: #D2EFFA;
`
const CountriesSection = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 150vh;
`
const SearchDiv = styled.div`
    width: 140vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1%;
`
const NewActivityDiv = styled.div`
    width: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1%;
`
const ButtonNewActiviy = styled.button`
    -webkit-box-shadow: 1px 1px 39px 0px rgba(0,0,0,0.43);
    -moz-box-shadow: 1px 1px 39px 0px rgba(0,0,0,0.30);
    background-color: #04ADBF;
    border: 1px solid #04ADBF;
    border-radius: 30px;
    box-shadow: 1px 1px 39px 0px rgba(0,0,0,0.30);
    font-size: 2rem;
    padding: 10px 30px;
    &:hover {
        background-color: #D6A886;
        border:1px solid #D6A886;
    }
`
const SearchInput = styled.input`
    font-size: 2rem;
    border: 0;
    border-radius: 30px;
    padding: 10px 30px;
    overflow: auto;
    outline: none;
`

function Countries() {
    let countries = useSelector(state => state.countries);
    const [search, setSearch] = useState();
    const [sortByName, setSortByName] = useState("ASC");
    const [sortByPopulation, setSortByPopulation] = useState("ASC")
    const dispatch = useDispatch();

    function handleInputChange(event) {
        setSearch(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        dispatch(searchCountriesByName(search));
    }

    function buttonOrderByName() {
        if (sortByName === "ASC") {
            dispatch(orderByName(sortByName));
            return setSortByName("DESC");
        } else if (sortByName === "DESC") {
            dispatch(orderByName(sortByName));
            return setSortByName("ASC");
        }
    }

    function buttonOrderByPopulation() {
        if(sortByPopulation === "ASC") {
            dispatch(orderByPopulation(sortByPopulation));
            return setSortByPopulation("DESC");
        } else if (sortByPopulation === "DESC") {
            dispatch(orderByPopulation(sortByPopulation));
            return setSortByPopulation("ASC");
        }
    }

    return (
        <PageSection>
            <TopSection>
                <NewActivityDiv>
                    <StyledLink to="/newActivity">
                        <ButtonNewActiviy>Create new activity</ButtonNewActiviy>
                    </StyledLink>
                </NewActivityDiv>
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
            </TopSection>
            <ResultSection>
                <FiltersSection>
                    <p>POR ORDEN ALFABETICO Y CANTIDAD POBLACION</p>
                    <button onClick={buttonOrderByName}>Order by name</button>
                    <button onClick={buttonOrderByPopulation}>Order by population</button>
                    <p>POR CONTINENTE Y ACTIVIDAD TURISTICA</p>
                    
                </FiltersSection>
                <CountriesSection>
                    {Array.isArray(countries) ? 
                    countries?.map(country => <Country key={country.id} country={country}/>) : 
                    <p>{countries}</p>}
                </CountriesSection>
            </ResultSection>
        </PageSection>
    )
}

export default Countries;