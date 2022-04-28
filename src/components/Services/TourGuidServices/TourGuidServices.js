import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { GuidsContext } from "../../../App";
import GuidCart from "./GuidCart/GuidCart";
import {Button , Form,FormControl} from 'react-bootstrap'
const TourGuidServices = () => {
  const [guids,setGuides] = useState([]);
  useEffect(()=>{
      fetch('guids.json')
      .then(res=>res.json())
      .then(data=>setGuides(data))

    },[])
    const [searchText,setSearchText] = useState('');
  // const { guids, setGuids } = useContext(GuidsContext);
  console.log(searchText);
  return (
    <div>
      <Form className="d-flex mt-5 search-form mx-auto">
            <FormControl
              type="search"
              placeholder="Search Your Spots"
              className="me-2"
              aria-label="Search"
              onChange={(event)=>setSearchText(event.target.value)}

            />
            <Button variant="outline-primary">Search</Button>
          </Form>
      <h1 className="text-center">Tour Guid Service</h1>
      <div className="guids-countainer">
        {guids.filter((val)=>{
          if(searchText=="")
          {
            return val;
          }else if(val.spot.toLowerCase().includes(searchText.toLocaleLowerCase())){
            return val;
          }
        }).map((guid) => (
          <GuidCart id={guid.id} guid={guid}></GuidCart>
        ))}
      </div>
    </div>
  );
};

export default TourGuidServices;
