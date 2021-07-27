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
            background: 'url("https://images.pexels.com/photos/3733269/pexels-photo-3733269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" center/cover no-repeat)',
            color: 'white',
        }}>
            {props.children}
        </div>
    )
}