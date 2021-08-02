import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CountryCard = styled.div`
    background-color: whitesmoke;
    height: 400px;
    width: 300px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    border-radius: 15px;
`
const CountryFlag = styled.img`
    height: 160px;
    width: 240px;
`
const CountryName = styled.span`
    font-size: 30px;
`
const CountryRegion = styled.span`
    font-size: 20px;
    font-style: italic;
`
const StyledLink = styled(Link)`
    color: black;
    margin: 1%;
    text-decoration: none;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    };
`;

function Country({country}) {
    return (
        <StyledLink to={`/country/${country.id}`}>
            <CountryCard>
                <CountryFlag src={country.imgFlag} alt="Country Flag"/>
                <CountryName>{country.name}</CountryName>
                <CountryRegion>{country.region}</CountryRegion>
            </CountryCard>
        </StyledLink>
    )
}

export default Country;