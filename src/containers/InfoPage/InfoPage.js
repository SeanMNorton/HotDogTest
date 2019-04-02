import React, { Component } from 'react';

import FullPage from '../../components/UI/FullPage/FullPage';
import logo from '../../assets/images/dog-icon.png';
import Button from '../../components/UI/Button/Button';
import InfoRow from '../../components/InfoRow/InfoRow';

import image1 from '../../assets/images/main-dog-1.jpg';
import image2 from '../../assets/images/main-dog-2.jpg';
import image3 from '../../assets/images/main-dog-3.jpg';



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
            <>
                <FullPage heightPercent="60">
                    <img src={logo} alt="hot dog logo"/>
                    <h1 style={this.headerStyle}>Dirty Dogs serves all-beef, vegan and vegatarian hot dogs.</h1>
                    <Button type="Primary">More Dogs'n Make Em Hot</Button>
                </FullPage>
                {/* this could be broken out into it's own component: maybe infoDetails where that folder would hold infoRow */}
                <InfoRow 
                    header="Gormet All Beef Hotdogs" 
                    text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." 
                    imgSrc={image1}
                    reverse={false}
                />
                <InfoRow 
                    header="Vegan Hotdogs" 
                    text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." 
                    imgSrc={image2}
                    reverse={true}
                />
                <InfoRow 
                    header="Vegitarian Hotdogs" 
                    text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." 
                    imgSrc={image3}
                    reverse={false}
                />
            </>
        )
    }
}

export default InfoPage;