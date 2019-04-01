import React from 'react';
import Header from '../Header/Header';

const Layout = (props) => {

    return (
        <>
            <Header/>
            <p>Navigation</p>
            <div>{props.children}</div>
        </>
    );
}

export default Layout;