import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return(
        <div className={classes.Footer}>
            <div>&reg; 2016 Dirty Dogs all rights reserved </div>
            <div>
                271 Marconi Blvd. Columbus, Ohio 43215 
                &nbsp;|&nbsp; 614.538.0095 
                &nbsp;|&nbsp; Contact Us
            </div>
        </div>
    );
}

export default Footer;