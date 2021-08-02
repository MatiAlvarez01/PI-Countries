import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components"
import Country from "../Country/Country";
import OrderByName from "../Filters/OrderByName";
import OrderByPopulation from "../Filters/OrderByPopulation";
import FilterByRegion from "../Filters/FilterByRegion";
import FilterByActivity from "../Filters/FilterByActivity";
import SearchByName from "../Filters/SearchByName";
import PrevPage from "../Pagination/PrevPage";
import NextPage from "../Pagination/NextPage";

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
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CountriesSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 150vh;
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
const PaginationButtonsDiv = styled.div`
    display: flex;
    justify-content: center;
`
const CountriesDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

function Countries() {
    const countries = useSelector(state => state.countries);
    const [search, setSearch] = useState();
    const [sortByName, setSortByName] = useState("ASC");
    const [sortByPopulation, setSortByPopulation] = useState("ASC")
    const [region, setRegion] = useState("all");
    const [activity, setActivity] = useState("all")
    const [indexStart, setIndexStart] = useState(0)
    const [indexEnd, setIndexEnd] = useState(9)

    return (
        <PageSection>
            <TopSection>
                <NewActivityDiv>
                    <StyledLink to="/newActivity">
                        <ButtonNewActiviy>Create new activity</ButtonNewActiviy>
                    </StyledLink>
                </NewActivityDiv>
                <SearchByName state={search} setState={setSearch}/>
            </TopSection>
            <ResultSection>
                <FiltersSection>
                    <p>POR ORDEN ALFABETICO Y CANTIDAD POBLACION</p>
                    <OrderByName state={sortByName} setStateName={setSortByName}/>
                    <OrderByPopulation state={sortByPopulation} setStatePopulation={setSortByPopulation}/>
                    <p>POR CONTINENTE Y ACTIVIDAD TURISTICA</p>
                    <FilterByRegion state={region} setState={setRegion}/>
                    <FilterByActivity state={activity} setState={setActivity}/>
                </FiltersSection>
                <CountriesSection>
                    <PaginationButtonsDiv>
                        <PrevPage stateStart={indexStart} stateEnd={indexEnd} setStateStart={setIndexStart} setStateEnd={setIndexEnd}/>
                        <NextPage setStateStart={setIndexStart} setStateEnd={setIndexEnd}/>
                    </PaginationButtonsDiv>
                        <CountriesDiv>
                        {Array.isArray(countries) ? 
                        countries?.slice(indexStart,indexEnd).map(country => <Country key={country.id} country={country}/>) : 
                        <p>{countries}</p>}
                    </CountriesDiv>
                </CountriesSection>
            </ResultSection>
        </PageSection>
    )
}

export default Countries;