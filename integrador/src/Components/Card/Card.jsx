import React from 'react'
import {Card as Cards, CardBody, Image} from "@nextui-org/react";

const Card = ({ title, price, location, rating, images }) => {
  return (
    <Cards className="w-40 h-52 bg-[#F9F3DB] rounded-[20px]" >

      <Image
          alt="Card background"
          radius='none'
          className="w-full object-cover h-[98px]  "
          src={images}
          width="100%"
        />
      <CardBody className="overflow-visible py-2 px-2 flex justify-between">
        <div className = "flex flex-row w-full justify-between items-center">
        <h4 className="font-bold text-[9px] w-[86px]">{title}</h4>
        <p className="italic font-bold text-[#E06A00] text-[11px]">{price}</p>
          </div>
        

        <small className="text-default-500">{location}</small>
        <p className="text-[10px] text-[#FEBC14] font-bold">{rating} ★ </p>
      </CardBody>
    </Cards>
  );
};


export default Card