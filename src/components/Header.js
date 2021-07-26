/* eslint-disable import/no-anonymous-default-export */
import React from 'react';


export default function(props){
    return(
        <div className='header' style={{
            fontSize: '2rem',
            color: 'White',
            height: '100vh',
            width: '100%',
            background: 'url("https://images.pexels.com/photos/1064129/pexels-photo-1064129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") center/cover no-repeat',
        }}>
            {props.children}
        </div>
        
    )
}