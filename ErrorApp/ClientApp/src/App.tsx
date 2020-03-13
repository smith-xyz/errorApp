import * as React from 'react';
import { Route, Switch } from 'react-router';

import './main.css'
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Layout from './components/Layout';

export default () => (
    <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        </Switch>
    </Layout>
);