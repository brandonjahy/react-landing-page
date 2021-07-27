import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(props){
    return(
        <div className='card' style={{
            fontSize: '1.5rem',
            height: '500px',
            width: '350px',
            border: '2px red solid',
            background: 'rgb(71,199,246)',
            color: 'white',
        }}>
            {props.children}
        </div>
    )
}