/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(props){
    return(
        <div className='card' style={{
            fontSize: '1.5rem',
            height: '500px',
            width: '350px',
            border: '2px red solid',
            // background: props.userData.imgURL,
            color: 'white',
            position: 'relative'
        }}>
            <div className="bg-img">
               <img  src={props.userData.imgURL} />
            </div>
            <div className='card-title'>
                {props.userData.title}
            </div>
            <hr className='card-div' />
            <div className='card-info'>
                {props.userData.info}
            </div>
            {props.children}
        </div>
    )
}