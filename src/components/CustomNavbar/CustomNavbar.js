import React from 'react';
import PropTypes from 'prop-types';
import {Link as RouterLink } from "react-router-dom";
import './CustomNavbar.css';

const CustomNavbar = (props) => {


    return (
        <div className="header">
            <nav className="navbar">
                <div className="navdiv">
                    <div className="logoContainer">
                        <div className="logobox">
            
                        </div>
                        <div className="companyName">
                            <RouterLink to={props.navbarBrandUrl}>
                                {props.navbarBrand}
                            </RouterLink>
                        </div>
                </div>
                {
                    props.links.map((link,index) => {
                        return (
                            <button key={index} type="button" className="nav-link-btn">
                                <RouterLink to={link.url}>
                                    
                                        {link.text}
                                
                                </RouterLink>
                        </button>
                    )
                    })
                }
                </div>
            </nav>
        </div>
    );
}

CustomNavbar.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    })),
    navbarBrand: PropTypes.string.isRequired,
    navbarBrandUrl: PropTypes.string.isRequired,
  };
  

export default CustomNavbar;