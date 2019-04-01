import React from 'react';

import hotdog1 from '../../assets/images/hotdog-1.jpg';
import hotdog2 from '../../assets/images/hotdog-2.jpg';
import hotdog3 from '../../assets/images/hotdog-3.jpg';
import hotdog4 from '../../assets/images/hotdog-4.jpg';
import hotdog5 from '../../assets/images/hotdog-5.jpg';
import hotdog6 from '../../assets/images/hotdog-6.jpg';
import hotdog7 from '../../assets/images/hotdog-7.jpg';
import hotdog8 from '../../assets/images/hotdog-8.jpg';
import instaLogo from '../../assets/images/insta-logo.png';


import classes from './Header.module.css';




const Header = () => {
    // I would probably make a call to a database to get the images and then put them into an array
    // That or use instagram to actually pull the hotdogs from #hotdog
    // Using .reverse() to change up the two rows without having 16 different imgs
    const hotdogSources = [ hotdog1, hotdog2, hotdog3, hotdog4, hotdog5, hotdog6, hotdog7, hotdog8];
    const row1 = hotdogSources.map((src, index) => <img className={classes.HotdogImg} src={src} key={index} alt="hotDog"/> )
    const row2 = [...row1].reverse()

 return (
    <div className={classes.Header}>
        <p className={classes.InstaTag}>
            <img className={classes.InstaLogo} src={instaLogo}/>
            <a href="https://www.instagram.com/explore/tags/hotdogs/?hl=en" target="_blank">#hotdogs</a>
        </p>

        <div className={classes.HeaderOverlay}></div>
        <div className={[classes.row, classes.overlay].join(' ')}>{row1}</div>
        <div className={classes.row}>{row2}</div>
    </div>
 );
}

export default Header;

