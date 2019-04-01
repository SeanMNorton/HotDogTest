import React from 'react';

const FullPage = (props) => {
    const style = {
        width: '100vw',
        height: '90vh',
        backgroundColor: 'rgb(248, 248, 248)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '10vh 5vw'
    }
    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export default FullPage;