import * as React from 'react';
import { Switch, Route } from 'react-router';
import Home from './Home';

export default (props: { children?: React.ReactNode }) => (
    <Switch>
        <Route path="/login" component={Home} />
    </Switch>
);
