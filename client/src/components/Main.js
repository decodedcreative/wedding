import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import GuestList from './GuestList';
import RSVP from './RSVP';
import Tables from './Tables';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/guestlist' component={GuestList} />
        <Route path='/tables' component={Tables} />
        <Route path='/rsvp' component={RSVP} />
      </Switch>
    );
  }
}

export default Main;