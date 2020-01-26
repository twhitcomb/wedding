import React from 'react';

import styled from 'styled-components';

import desktopImage from '../images/engagement-leaves.jpg';
import mobileImage from '../images/engagement-portrait.jpg';

import useWindowWidth from '../hooks/useWindowWidth';
import { Container } from 'reactstrap';


const Home = () => {

    const device = useWindowWidth() > 992 ? "desktop" : "mobile";

    const Background = styled.div`
        position: fixed;
        width: 105vw;
        height: 100vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top center;
        background-image: url(${device === "mobile" ? mobileImage : desktopImage});        
    `;

    const MainMessage = styled.h1`
        position: ${device === "mobile" ? "relative" : "absolute"};
        ${device === "desktop" ? 
            `
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                width: 800px;
            `
            : ""
        }
        ${device === "mobile" ? "top: 130px" : "bottom: 0"};
        font-family: 'DK Otago', sans-serif;
        font-size: ${device === "mobile" ? "12vw" : "7em"};
        color: var(--white);
        text-align: center;
        text-shadow: 0 0 20px var(--black);
    `;

    const AboutUs = styled.div`
        position: absolute;
        top: 100vh;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: 900px;
    `;

    return (
        <>
            <Background />
            <MainMessage>We're getting married!</MainMessage>
            <AboutUs className='container'>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </AboutUs>
        </>
    );
}

export default Home;