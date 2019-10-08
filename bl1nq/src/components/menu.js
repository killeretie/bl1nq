import React from "react";
import { elastic as Menu } from "react-burger-menu";


export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Home
            </a>

            <a className="menu-item" href="/blog">
                Blog
            </a>

            <a className="menu-item" href="/gallery">
                Gallery
            </a>

            <a className="menu-item" href="/contact">
                Contact
            </a>

            <a className="menu-item" href="/legal">
                Legal
            </a>
        </Menu>
    );
};