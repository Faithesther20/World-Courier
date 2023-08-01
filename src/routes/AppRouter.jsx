import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home, About, Contact, Services } from "./components";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/services" component={Services} />
      </Switch>
    </Router>
  );
};

export default AppRouter;