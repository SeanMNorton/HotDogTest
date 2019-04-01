import React, { Component } from 'react';

import FullPage from '../../components/UI/FullPage/FullPage';
import logo from '../../assets/images/dog-icon.png';
import Button from '../../components/UI/Button/Button';

class InfoPage extends Component {
    headerStyle = {
        fontFamily: 'Open Sans',
        fontSize: '2em',
        fontWeight: '300',
        textAlign: 'center',
        maxWidth: '650px',
        margin: '3vh 0 6vh 0'
    }
    render() {
        return (
            <FullPage heightPercent="60">
                <img src={logo} alt="hot dog logo"/>
                <h1 style={this.headerStyle}>Dirty Dogs serves all-beef, vegan and vegatarian hot dogs.</h1>
                <Button type="Primary">More Dogs'n Make Em Hot</Button>
            </FullPage>
        )
    }
}

export default InfoPage;