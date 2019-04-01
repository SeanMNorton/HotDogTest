import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const Layout = (props) => {

    return (
        <>
            <Header/>
            <Navigation />
            <div>{props.children}</div>
            <Footer/>
        </>
    );
}

export default Layout;