import React from "react";
import { Card as Cards, CardBody, Image } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

const Card = ({ title, price, location, rating, images }) => {
  return (
    <Cards className="w-[320px] h-[175px] bg-[#06A77D] rounded-[16px]">
      <div className="grid grid-cols-5	">
        <img
          alt="Album cover"
          className="object-cover h-full col-span-2"
          src={images}
        />

        <div className=" col-span-3 flex flex-col justify-evenly text-center py-4">
          <h4 className="font-bold text-[12px] w-4/5 text-white self-center ">{title}</h4>
          <small className="text-white self-center">{location}</small>
          <Chip
            size="lg"
            classNames={{
              base: "bg-white self-center ",
              content: "text-[#B185A8] font-bold italic ",
            }}
          >
            {price}
          </Chip>

          <p className="text-[14px] text-[#FEBC14] font-bold">{rating} ★ </p>
        </div>
      </div>
    </Cards>
  );
};

export default Card;
