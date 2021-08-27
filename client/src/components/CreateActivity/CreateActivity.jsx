import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SearchByName from "../Filters/SearchByName"
import OrderByName from "../Filters/OrderByName";
import FilterByRegion from "../Filters/FilterByRegion";
import FilterByActivity from "../Filters/FilterByActivity";
import OrderByPopulation from "../Filters/OrderByPopulation";
import ActivityForm from "../ActivityForm/ActivityForm";

const StyledLink = styled(Link)`
    color: black;
    margin: 1%;
    text-decoration: none;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    };
`;

const PageSection = styled.section`
    background-color: #D6A886;
    display: flex;
    height: 100vh;
    flex-direction: column;
`
const TopSection = styled.section`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 10vh;
    justify-content: space-around;
    margin-bottom: 1%
`
const TopSectionLeft = styled.div`
`
const TopSectionRight = styled.div`
    width: 100vh;
`
const MiddleSection = styled.section`
    display: flex;
    height: 80vh;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: center;
`
const MiddleSectionLeft = styled.div`
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    width: 90vh;
`
const MiddleSectionRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90vh;
`
const CreateActivityDiv = styled.div`
    align-items: center;
    background-color: #EDFFD9;
    display: flex;
    border-radius: 0 20px 20px 0;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 100%;
    justify-content: center;
    margin-bottom: 2%;
    width: 100%;
`
const CountriesDiv = styled.div`

`
const FiltersDiv = styled.div`
    align-items: center;
    background-color: #EDFFD9;
    border-radius: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    height: 40vh;
    justify-content: center;
`
const StyledButton = styled.button`
    font-size: 2rem;
`
const StyledUList = styled.ul`
    background-color: #EDFFD9;
    border-radius: 0 20px;
    height: 40vh;
    list-style: none;
    overflow: hidden;
    overflow-y: scroll;
`
const StyledLItem = styled.li`
    margin: 5px;
`
const ButtonChoose = styled.button`
    margin-left: 5px;
`
const PageTitle = styled.span`
    font-size: 3rem;
`

function CreateActivity() {
    const countries = useSelector(state => state.countries);
    const [search, setSearch] = useState();
    const [sortByName, setSortByName] = useState("ASC");
    const [sortByPopulation, setSortByPopulation] = useState("ASC")
    const [region, setRegion] = useState("all");
    const [activity, setActivity] = useState("all")
    const [newActivity, setNewActivity] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
    });

    function handleChooseButton(id) {
        setNewActivity({
            ...newActivity,
            countries: [...newActivity.countries, id]
        })
    }

    return (
    <PageSection>
        <TopSection>
            <TopSectionLeft>
                <StyledLink to="/countries">
                    <StyledButton>Home</StyledButton>
                </StyledLink>
            </TopSectionLeft>
            <TopSectionRight>
                <PageTitle>Create new activity</PageTitle>
            </TopSectionRight>
        </TopSection>
        <MiddleSection>
            <MiddleSectionLeft>
                <CreateActivityDiv>
                    <ActivityForm state={newActivity} setState={setNewActivity}/>
                </CreateActivityDiv>
            </MiddleSectionLeft>
            <MiddleSectionRight>
                <FiltersDiv>
                    <SearchByName state={search} setState={setSearch}/>
                    <OrderByName state={sortByName} setStateName={setSortByName}/>
                    <OrderByPopulation state={sortByPopulation} setStatePopulation={setSortByPopulation}/>
                    <FilterByRegion state={region} setState={setRegion}/>
                    <FilterByActivity state={activity} setState={setActivity}/>
                </FiltersDiv>
                <CountriesDiv>
                    <StyledUList>
                        {countries?.length ? 
                        countries?.map(country => <StyledLItem key={country.id}>{country.name} <ButtonChoose onClick={() => handleChooseButton(country.id)}>Choose</ButtonChoose></StyledLItem>) : 
                        <li>Country not found</li>}
                    </StyledUList>
                </CountriesDiv>
            </MiddleSectionRight>
        </MiddleSection>
    </PageSection>
    )
}

export default CreateActivity;