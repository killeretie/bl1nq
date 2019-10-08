import React, { Component } from 'react'
import { ParallaxProvider, ParallaxBanner, Parallax } from 'react-scroll-parallax';

import "../style.css"

import Clouds from "../media/clouds.jpg"
import Expand from "../media/expand_more-24px.svg"




class Home extends Component {
    render() {
        return (
            <ParallaxProvider>
                <ParallaxBanner
                    className="cloudsBanner"
                    layers={[
                        {
                            image: Clouds,
                            amount: 0.25,
                        },
                    ]}
                    style={{
                        width: '100%',
                        height: '125vh',
                    }}
                >
                    <div className="title">
                        <Parallax y={[0, -250]} >
                            <h1>Welcome to Bl1nq</h1>
                        </Parallax>
                        <Parallax y={[150, 500]} >
                            <img src={Expand} className="expand" alt="Scroll"/>
                        </Parallax>

                    </div>
                </ParallaxBanner>


                <div className="content" id="foo" ref={this.props.myRef}>
                    <h1>Platzhalter</h1>
                    <h1>Platzhalter</h1>
                    <h1>Platzhalter</h1>
                    <h1>Platzhalter</h1>
                    <h1>Platzhalter</h1>
                    <h1>Platzhalter</h1>
                    <h1>Platzhalter</h1>
                    <h1>Platzhalter</h1>
                </div>

            </ParallaxProvider>
        );
    }
}

export default Home;
