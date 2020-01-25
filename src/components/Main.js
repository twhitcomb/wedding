import React from 'react';

import { Switch } from 'react-router-dom';

import Header from './Header';

const Main = (props) => {
    
    return (
        <>
            <Header device={props.device}/>
            <Switch>
                
            </Switch>
        </>
    );
}

export default Main;