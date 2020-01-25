import React from 'react';

import useWindowWidth from '../hooks/useWindowWidth';

const Home = () => {

    const device = useWindowWidth() > 992 ? "desktop" : "mobile";

    return (
        <div>

        </div>
    );
}

export default Home;