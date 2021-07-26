import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(props){
    return(
        <div className='about' style={{
            fontSize: '1.5rem',
            height: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'Center',
            background: 'rgb(0,0,0)',
            color: 'white',
        }}>
            {props.children}
        </div>
    )
}