import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(props){
    return(
        <div className='space' style={{
            fontSize: '1.5rem',
            height: '100vh',
            width: '100%',
            color: 'white',
        }}>
            <h1 className='space-title'>
                where will you go in space?
            </h1>
            
            {props.children}
        </div>
    )
}