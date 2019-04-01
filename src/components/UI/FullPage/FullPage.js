import React from 'react';

const FullPage = (props) => {
    const style = {
        width: '100vw',
        height: `${props.heightPercent}vh`,
        backgroundColor: 'rgb(248, 248, 248)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
    }
    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export default FullPage;