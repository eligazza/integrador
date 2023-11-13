import React from "react";
import { Card as Cards, CardBody, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Card = ({ id, title, price, location, rating, images }) => {
  return (
    <Cards className="w-40 h-52 bg-[#F9F3DB] rounded-[17px]">
      <Link to={`/producto/${id}`}>
      <Image
        alt="Card background"
        radius="none"
        className="w-full object-cover h-[98px]  "
        src={images}
        width="100%"
      />
       
      <CardBody className="overflow-visible py-[8px] px-[10px] flex justify-between">
        <div className="flex flex-row w-full justify-between items-start">
          <h4 className="font-bold text-[9px] w-[86px]">{title}</h4>
          <p className="italic font-bold text-[#E06A00] text-[11px]">{price}</p>
        </div>
        <small className="text-default-500">{location}</small>
        <p className="text-[14px] text-[#FEBC14] font-bold text-center">{rating} ★ </p>
      </CardBody>
     </Link>
    </Cards>
  );
};

export default Card;
