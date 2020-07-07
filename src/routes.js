import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/profile' component={Profile}/>
    </Switch>
)