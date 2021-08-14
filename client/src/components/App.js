import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import "./App.css";

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyCreator from './SurveyCreator';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Route exact path='/' component={Landing} />
          <Route exact path='/surveys' component={Dashboard} />
          <Route path='/surveys/new' component={SurveyCreator} />
        </BrowserRouter>
      </div >
    );
  }
}

export default connect(null, actions)(App);