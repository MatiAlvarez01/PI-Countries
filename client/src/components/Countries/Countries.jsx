import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components"
import Country from "../Country/Country";

const PageSection = styled.section`
    background-color: green;
`
const SearchSection = styled.section`
    background-color: orangered;
`
const ResultSection = styled.section`
    background-color: blue;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
`
const FiltersSection = styled.section`
    background-color: skyblue;
    width: 50vh;
`
const CountriesSection = styled.section`
    background-color: coral;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 150vh;
`

function Countries() {

    const countries = useSelector(state => state.countries)
    
    return (
        <PageSection>
            <SearchSection>
                SEARCH SECTION
            </SearchSection>
            <ResultSection>
                <FiltersSection>
                    <p>POR ORDEN ALFABETICO Y CANTIDAD POBLACION</p>
                    <p>POR CONTINENTE Y ACTIVIDAD TURISTICA</p>
                </FiltersSection>
                <CountriesSection>
                    {countries.map(country => <Country key={country.id} country={country}/>)}
                </CountriesSection>
            </ResultSection>
        </PageSection>
    )
}

export default Countries;