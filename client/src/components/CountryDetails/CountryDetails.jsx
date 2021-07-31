import React, { useEffect, useState } from "react";
import { COUNTRIES_URL } from "../../constants";
import { useParams } from "react-router-dom";
import styled from "styled-components"
import axios from "axios";

const CountryDetailsSection = styled.section`
    background-color: green;
`
const NameSection = styled.section`
    background-color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`
const MiddleSection = styled.section`
    background-color: coral;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1%;
    justify-content: space-around;
`
const ActivitiesSection = styled.section`
    text-align: center;
    padding: 1%;
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

function CountryDetails() {
    const [countryDetails, setCountryDetails] = useState({})
    const { id } = useParams()

    function getCountryDetails(id) {
        axios.get(`${COUNTRIES_URL}/${id}`)
        .then(countryDetails => setCountryDetails(countryDetails.data))
    }

    useEffect(() => {
        getCountryDetails(id)
    }, [])

    return (
        <CountryDetailsSection>
            <NameSection>
                <CountryName>{countryDetails.name}</CountryName>
            </NameSection>
            <MiddleSection>
                <FlagDiv>
                    <FlagImg src={countryDetails.imgFlag} alt="Country Flag"/>
                </FlagDiv>
                <InfoDiv>
                    <InfoDivLeft>
                        <Property>ID: <Dato>{countryDetails.id}</Dato></Property>
                        <Property>CAPITAL: <Dato>{countryDetails.capital}</Dato></Property>
                        <Property>POPULATION: <Dato>{countryDetails.population}</Dato></Property>
                    </InfoDivLeft>
                    <InfoDivRight>
                        <Property>REGION: <Dato>{countryDetails.region}</Dato></Property>
                        <Property>SUB REGION: <Dato>{countryDetails.subRegion}</Dato></Property>
                        <Property>AREA: <Dato>{countryDetails.area}</Dato></Property>
                    </InfoDivRight>
                </InfoDiv>
            </MiddleSection>
            <ActivitiesSection>
                {countryDetails.activities?.length ? 
                countryDetails.activities.map(activity => <p>{activity}</p>) :
                <p>This Country dosn't have any activities</p>}
            </ActivitiesSection>
        </CountryDetailsSection>
    )
}

export default CountryDetails;