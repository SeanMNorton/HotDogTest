import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

const Layout = (props) => {

    return (
        <>
            <Header/>
            <Navigation />
            <div>{props.children}</div>
        </>
    );
}

export default Layout;