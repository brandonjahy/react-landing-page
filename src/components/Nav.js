import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(props){
    return(
        <div className='nav' style={{
            fontSize: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'Center',
            background: 'rgba(0,0,0,.4)',
            color: 'white',
            padding: '30px 250px',
            cursor: 'pointer',
        }}>
            {props.children}
        </div>
    )
}