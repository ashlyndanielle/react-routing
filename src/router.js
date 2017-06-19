import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Store from './components/Store/Store';
import Details from './components/Details/Details';
import Checkout from './components/Checkout/Checkout';

export default (
    <Switch>
        <Route exact path='/' component={ Store } />
        <Route path='/Details/:id' component={ Details }/>
        <Route path='/Checkout' component={ Checkout }/>
    </Switch>
);