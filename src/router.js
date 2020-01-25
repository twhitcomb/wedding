import React from 'react';

import Home from './components/Home';
import RSVP from './components/RSVP';

const routes = {
    '/': () => <Home />,
    '/home': () => <Home />,
    '/rsvp': () => <RSVP />
};

export default routes;