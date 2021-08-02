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
    flex-direction: column;
    height: 100vh;
`
const TopSection = styled.section`
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1%
`
const TopSectionLeft = styled.div`
`
const TopSectionRight = styled.div`
    width: 100vh;
`
const MiddleSection = styled.section`
    height: 80vh;
    display: flex;
    justify-content: space-around;
    text-align: center;
`
const MiddleSectionLeft = styled.div`
    width: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex-wrap: nowrap;
    align-items: center;
`
const MiddleSectionRight = styled.div`
    width: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const CreateActivityDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    background-color: #EDFFD9;
    justify-content: center;
    border-radius: 0 20px 20px 0;
    height: 100%;
    width: 100%;
    margin-bottom: 2%;
`
const CountriesDiv = styled.div`

`
const FiltersDiv = styled.div`
    height: 40vh;
    background-color: #EDFFD9;
    border-radius: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const StyledButton = styled.button`
    font-size: 2rem;
`
const StyledUList = styled.ul`
    height: 40vh;
    overflow: hidden;
    overflow-y: scroll;
    list-style: none;
    background-color: #EDFFD9;
    border-radius: 0 20px;
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