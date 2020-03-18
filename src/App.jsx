import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
        <Footer />
      </Router>
    )
  }
}
