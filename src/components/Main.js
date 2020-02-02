import React from 'react';

import Header from './Header';

import styled from 'styled-components';

import useWindowWidth from '../hooks/useWindowWidth';
import { useRoutes } from 'hookrouter';
import routes from '../router';

const Main = () => {

    const device = useWindowWidth() > 992 ? "desktop" : "mobile";

    const Container = styled.div`
        padding-top: ${device === "desktop" ? 86 : 125}px
    `;
    
    return (
        <>
            <Header />
            <Container>
                {useRoutes(routes)}
            </Container>
        </>
    );
}

export default Main;