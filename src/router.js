import React from 'react';

import Home from './components/Home';
import RSVP from './components/RSVP';
import Invites from './components/Invites';

const routes = {
    '/': () => <Home />,
    '/home': () => <Home />,
    '/rsvp': () => <RSVP />,
    '/invites': () => <Invites />
};

export default routes;