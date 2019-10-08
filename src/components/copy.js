import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RadialMenu from "react-radial-menu"

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
                    <h2>Welcome to Bl1nq</h2>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul>
                            <li className="button">
                                <Link to={'/'} className="nav-link">Home</Link>
                            </li>
                            <li className="button">
                                <Link to={'/blog'} className="nav-link">Blog</Link>
                            </li>
                            <li className="button">
                                <Link to={'/gallery'} className="nav-link">Gallery</Link>
                            </li>
                            <li className="button">
                                <Link to={'/contact'} className="nav-link">Contact</Link>
                            </li>
                            <li className="button">
                                <Link to={'/legal'} className="nav-link">Legal</Link>
                            </li>
                        </ul>
                        <CircularMenu
                            items={this._renderItems()}
                            closeBtn={this._renderCloseBtn()}
                            show={false}
                            items={["Home", "Blog", "Gallery"]}
                            position={"topLeft"}
                        />
                    </nav>

                    <hr />
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