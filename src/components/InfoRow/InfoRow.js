import React from 'react';
import classes from './InfoRow.module.css';

// expects imgSrc, header, text, reverse: boolean;
const InfoRow = (props) => {
    const imgStyle = {
        background: `url(${props.imgSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    let rowClass = classes.Row;
    if(props.reverse) {
        rowClass = classes.RowReverse
    }
    
    return (
        <div className={rowClass}>
            <div className={classes.Column}>
                <div className={classes.TextArea}>
                    <h2>{props.header}</h2>
                    <p>{props.text}</p>
                </div>
            </div>
            <div className={classes.Column} style={imgStyle}>
            </div>
        </div>
    );
}

export default InfoRow;