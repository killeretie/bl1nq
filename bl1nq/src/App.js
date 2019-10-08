import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "./style.css";
import Menu from './components/menu'

import Home from './components/home';
import Blog from './components/blog';
import Contact from './components/contact';
import Gallery from './components/gallery';
import Legal from './components/legal';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu pageWrapId={"page-wrap"} outerContainerId={"App"} />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/blog' component={Blog} />
                        <Route path='/gallery' component={Gallery} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/legal' component={Legal} />
                    </Switch>
                </div>
            </Router>
        );
    }
}


export default App;