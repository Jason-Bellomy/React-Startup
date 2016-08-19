/*eslint-disable strict */

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function() {
        var route = window.location.hash.substr(1);
        return (
            <div>
                <Header activeLink={route}/>
                <div className="jumbotron">
                    <div className="container-fluid">
                        <RouteHandler />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = App;