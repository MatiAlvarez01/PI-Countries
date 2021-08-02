import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CountryCard = styled.div`
    align-items: center;
    background-color: whitesmoke;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 400px;
    justify-content: space-around;
    text-align: center;
    width: 300px;
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
    text-decoration: none;
    margin: 1%;
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