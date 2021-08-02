import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

const LandingSection = styled.section`
    background-image: url('/landingImg2.jpg');
    background-position-y: center;
    background-size: cover;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 100vh;
    justify-content: space-between;
`
const LeftSide = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    width: 40%;
`
const RightSide = styled.div``

const ContentLeft = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
`
const LandingTittle = styled.span`
    color: black;
    font-family: 'Satisfy', cursive;
    font-size: 7rem;
`
const CountriesButton = styled.button`
    -webkit-box-shadow: 1px 1px 39px 0px rgba(0,0,0,0.43);
    -moz-box-shadow: 1px 1px 39px 0px rgba(0,0,0,0.30);
    background-color: #04ADBF;
    border: 1px solid #04ADBF;
    border-radius: 30px;
    box-shadow: 1px 1px 39px 0px rgba(0,0,0,0.43);
    font-family: 'Quicksand', sans-serif;
    font-size: 2rem;
    padding: 10px 30px;
    &:hover {
        background-color: #D6A886;
        border:1px solid #D6A886;
    }
`

function Landing() {
    return <LandingSection>
        <RightSide>
        </RightSide>
        <LeftSide>
            <ContentLeft>
                <LandingTittle>Countries</LandingTittle>
                <Link to="/countries">
                    <CountriesButton>Go in</CountriesButton>
                </Link>
            </ContentLeft>
        </LeftSide>
    </LandingSection>
}

export default Landing;