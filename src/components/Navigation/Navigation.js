import React from 'react';

import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={classes.NavBar}>
            <a href="/"> Menu </a>
            <a href="/"> Catering </a>
            <a href="/"> About Us </a>
            <a href="/"> Contact </a>

        </div>
    );
}

export default Navigation;