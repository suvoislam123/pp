import React from 'react';
import './spots.css'
const SpotItem = ({spot}) => {
    const {id,name,img,details} = spot;
    return (
        <div className='d-block mx-auto spot'>
            <h1>{id}.{name}</h1>
            <img src={img} alt="" />
            <p>{details}</p>
        </div>
    );
};

export default SpotItem;