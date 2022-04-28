import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SpotItem from './SpotItem';

const Spots = () => {
    const [spots,setSpots] = useState([]);
    useEffect(()=>{
        fetch('places.json')
        .then(res => res.json())
        .then(data=>setSpots(data))

    },[])
    return (
        <div>
            <h1 className='text-center'>Our Service Providing Spots:</h1>
            {
                spots.map(spot=><SpotItem
                id ={spot.id}
                spot={spot}
                
                >

                </SpotItem>)    
            }
        </div>
    );
};

export default Spots;