import React from 'react';
import {Link as RouterLink } from "react-router-dom";
import PropTypes from 'prop-types';
import './MainMenuLinks.css';

const MainMenuLinks = (props) => {
    return(
        <div className="wrapper">
        <div className="main-container">
            <div className="menu-header">
                <h3>Main Menu</h3>
            </div>
            <div className="menu-body">
                {
                    props.links.map((link, index) => {
                        return(
                            <div key={index} className="flex-box">
                                <div className="icon-box"></div>
                                <p>
                                    <RouterLink to={link.url}>{link.text}</RouterLink>
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </div>
    )
}

MainMenuLinks.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }))
};

export default MainMenuLinks;