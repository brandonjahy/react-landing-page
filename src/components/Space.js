import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(props){
    return(
        <div className='space' style={{
            fontSize: '1.5rem',
            height: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'Center',
            background: 'url("https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" center/cover no-repeat)',
            color: 'white',
        }}>
            {props.children}
        </div>
    )
}