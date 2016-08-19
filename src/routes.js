"use strict";
var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/home" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/home')} />
        <Route name="about" path="/about" handler={require('./components/about/about')} />
        <Redirect from="/" to="/home" />
    </Route>
);

module.exports = routes;