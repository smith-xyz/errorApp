import * as React from 'react';
import { Switch, Route } from 'react-router';
import Home from './Home';
import Counter from './Counter';
import FetchData from './FetchData';
import Layout from './Layout';

export default (props: { children?: React.ReactNode }) => (
    <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        </Switch>
    </Layout>
);
