import React from 'react';

import Header from './Header';

import { useRoutes } from 'hookrouter';
import routes from '../router';

const Main = () => {
    
    return (
        <>
            <Header />
            {useRoutes(routes)}
        </>
    );
}

export default Main;