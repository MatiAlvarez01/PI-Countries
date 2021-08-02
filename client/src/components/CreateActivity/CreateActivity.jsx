import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createNewActivity } from "../../actions";
import styled from "styled-components";

const PageSection = styled.section`
    background-color: grey;
    display: flex;
    flex-direction: column;
`
const TopSection = styled.section`
    background-color: blue;
    height: 10vh;
`
const MiddleSection = styled.section`
    background-color: coral;
    height: 90vh;
    display: flex;
    justify-content: space-around;
    text-align: center;
`
const MiddleSectionLeft = styled.div`
    background-color: white;
    width: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex-wrap: nowrap;
    align-items: center;
`
const MiddleSectionRight = styled.div`
    background-color: green;
    width: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const CreateActivityDiv = styled.div`
    background-color: grey;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
`
const CountriesDiv = styled.div`

`
const FiltersDiv = styled.div`
    background-color: white;
    height: 40vh;
`
const StyledButton = styled.button`
`
const StyledUList = styled.ul`
    height: 50vh;
    overflow: hidden;
    overflow-y: scroll;
    list-style: none
`
const StyledLItem = styled.li`
    margin: 5px;
`
const ButtonChoose = styled.button`
    margin-left: 5px;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`


function CreateActivity() {
    const countries = useSelector(state => state.countriesBackup);
    const dispatch = useDispatch();
    const [newActivity, setNewActivity] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
    });

    function onInputChange(event) {
        setNewActivity(prevState => {
            return {
                ...prevState,
                [event.target.name] : event.target.value
            }
        })
    }

    function submitNewActivity(event) {
        event.preventDefault();
        dispatch(createNewActivity(newActivity))
    }

    function handleChooseButton(id) {
        setNewActivity({
            ...newActivity,
            countries: [...newActivity.countries, id]
        })
    }

    return (
    <PageSection>
        <TopSection>
            <StyledButton>Home</StyledButton>
        </TopSection>
        <MiddleSection>
            <MiddleSectionLeft>
                <CreateActivityDiv>
                    <StyledForm onSubmit={submitNewActivity}>
                        <label>Name:</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={newActivity.name} 
                                onChange={onInputChange}/>
                        <label>Difficulty:</label>
                        <input 
                            type="text" 
                            name="difficulty" 
                            value={newActivity.difficulty} 
                            onChange={onInputChange}/>
                        <label>Duration:</label>
                        <input 
                            type="text" 
                            name="duration" 
                            value={newActivity.duration} 
                            onChange={onInputChange}/>
                        <label>Season:</label>
                        <input 
                            type="text" 
                            name="season" 
                            value={newActivity.season} 
                            onChange={onInputChange}/>
                        <button type="submit">Create</button>
                    </StyledForm>
                </CreateActivityDiv>
            </MiddleSectionLeft>
            <MiddleSectionRight>
                <FiltersDiv>
                    FILTERS
                </FiltersDiv>
                <CountriesDiv>
                    <StyledUList>
                        {countries?.length ? 
                        countries?.map(country => <StyledLItem>{country.name} <ButtonChoose onClick={() => handleChooseButton(country.id)}>Choose</ButtonChoose></StyledLItem>) : 
                        <li>Country not found</li>}
                    </StyledUList>
                </CountriesDiv>
            </MiddleSectionRight>
        </MiddleSection>
    </PageSection>
    )
}

export default CreateActivity;