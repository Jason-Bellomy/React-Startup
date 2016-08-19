"use strict";
var React = require('react');

var Home = React.createClass({
    propTypes: {
        activeLink: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            activeLink: "/home"
        }
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
                                <a href={"/#" + this.links.HOME}><i title="Home" className="fa fa-home"></i></a>
                            </li>
                            <li className={this.props.activeLink === this.links.ABOUT ? "active" : ""}>
                                <a href={"/#" + this.links.ABOUT}>About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = Home;
