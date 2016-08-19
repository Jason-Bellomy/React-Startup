"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    propTypes: {
        activeLink: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            activeLink: "/home"
        };
    },
    links: {
        HOME: "/home",
        ABOUT: "/about"
    },
    render: function() {
        return (
            <nav className="navbar navbar-default" style={{marginBottom: "10px"}}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                                aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className={this.props.activeLink === this.links.HOME ? "active" : ""}>
                                <Link to="app"><i title="Home" className="fa fa-home"></i></Link>
                            </li>
                            <li className={this.props.activeLink === this.links.ABOUT ? "active" : ""}>
                                <Link to="about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
