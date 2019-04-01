import React from 'react';
import classes from './InfoRow.module.css';

// expects imgSrc, header, text, reverse: boolean;
const InfoRow = (props) => {
    const imgStyle = {
        background: `url(${props.imgSrc})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    const dashStyle = {
        fontFamily: 'Open Sans',
        fontWeight: '100',
    }

    let reverseClass = null;
    if(props.reverse) {
        reverseClass = classes.RowReverse
    }
    
    return (
        <div className={[reverseClass, classes.Row].join(' ')}>
            <div className={classes.Column}>
                <div className={classes.TextArea}>
                    <h2>
                        <span style={dashStyle}>&mdash; &nbsp;</span> 
                        {props.header}
                    </h2>
                    <p>{props.text}</p>
                </div>
            </div>
            <div className={classes.Column} style={imgStyle}>
            </div>
        </div>
    );
}

export default InfoRow;