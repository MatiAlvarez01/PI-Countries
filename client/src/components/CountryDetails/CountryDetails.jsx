import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetails } from "../../actions";
import styled from "styled-components"

const CountryDetailsSection = styled.section`
    background-color: #E4DFDA;
    height: 100vh;
`
const NameSection = styled.section`
    background-color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const MiddleSection = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1%;
    justify-content: space-around;
`
const ActivitiesSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ActivitiesSectionTitle = styled.div`

`
const FlagDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`
const InfoDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2%;
    align-items: center;
    text-align: center;
`
const InfoDivLeft = styled.div`
    width: 40vh;
`
const InfoDivRight = styled.div`
    width: 40vh;
`
const CountryName = styled.p`
    color: black;
    font-size: 4rem;
    margin: 15px;
`
const FlagImg = styled.img`
    height: 450px;
`
const Property = styled.p`
    font-size: 1.5rem;
    font-style: italic;
    margin: 70px 0;
`
const Dato = styled.span`
    font-size: 2rem;
    font-style: normal;
`
const Button = styled.button`
    font-size: 2rem;
`
const ActivitiesTitle = styled.p`
    font-size: 1.5rem;
`
const ActivityCard = styled.div`
    height: 160px;
    width: 150px;
    background-color: white;
    margin: 2%;
    padding: 1%;
    text-align: center;
`
const Activities = styled.div`
    display: flex;
`

function CountryDetails() {
    const { id } = useParams();
    let countryDetails = useSelector(state => state.countryDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountryDetails(id));
    }, [])

    return (
        <CountryDetailsSection>
            <NameSection>
                <Link to="/countries"><Button>Home</Button></Link>
                <CountryName>{countryDetails?.name}</CountryName>
            </NameSection>
            <MiddleSection>
                <FlagDiv>
                    <FlagImg src={countryDetails?.imgFlag} alt="Country Flag"/>
                </FlagDiv>
                <InfoDiv>
                    <InfoDivLeft>
                        <Property>ID: <Dato>{countryDetails?.id}</Dato></Property>
                        <Property>CAPITAL: <Dato>{countryDetails?.capital}</Dato></Property>
                        <Property>POPULATION: <Dato>{countryDetails?.population}</Dato></Property>
                    </InfoDivLeft>
                    <InfoDivRight>
                        <Property>REGION: <Dato>{countryDetails?.region}</Dato></Property>
                        <Property>SUB REGION: <Dato>{countryDetails?.subRegion}</Dato></Property>
                        <Property>AREA: <Dato>{countryDetails?.area}</Dato>km2</Property>
                    </InfoDivRight>
                </InfoDiv>
            </MiddleSection>
            <ActivitiesSection>
                <ActivitiesSectionTitle>
                    <ActivitiesTitle>ACTIVITIES:</ActivitiesTitle>
                </ActivitiesSectionTitle>
                <Activities>
                    {countryDetails?.activities?.length ? 
                    countryDetails?.activities.map(activity => <ActivityCard>
                        <p>{activity.name}</p>
                        <p>Difficulty: {activity.difficulty}</p>
                        <p>Duration: {activity.duration}</p>
                        <p>Season: {activity.season}</p>
                    </ActivityCard>) :
                <p>This Country dosn't have any activities</p>}
                </Activities>
            </ActivitiesSection>
        </CountryDetailsSection>
    )
}

export default CountryDetails;