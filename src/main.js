$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/home');
var About = require('./components/about/about');
var Header = require('./components/common/header');

(function(window) {
    "use strict";
    var App = React.createClass({
        render: function() {
            var Child;
            var route = window.location.hash.substr(1);
            
            switch (this.props.route) {
            case '/home':
                Child = Home;
                break;
            case '/about':
                Child = About;
                break;
            default:
                window.location.hash = "#/home";
            }
            
            return (
                <div>
                    <Header activeLink={route}/>
                    <div className="jumbotron">
                        <div className="container">
                            <Child />
                        </div>
                    </div>
                </div>
            );
        }
    });
    
    function render() {
        var route = window.location.hash.substr(1);
        React.render(<App route={route} />, document.getElementById('app'));
    }
    
    window.addEventListener('hashchange', render);
    render();
})(window);
