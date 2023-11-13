import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="overflow-visible flex items-center space-x-2 text-base mx-auto py-10 justify-center">
      <div className="flex justify-center pl-[20rem]">
        
        <div className="flex-initial">
          <div
            className="justify-item-center w-full font-montserrat text-[24px] font-light"
            onClick={handlePrevious}
          >
            <img
              src="/images/angulo-izquierdo1.svg"
              alt="Back late"
              className="justify-item-center flex text-94 w-[4rem] pt-[6rem]"
            />
          </div>
        </div>

        <div className="flex-initial">
            <img key={currentIndex} src={images[(currentIndex)%3]} className="w-[10rem] rounded-3xl m-4 bg-gradient-to-r from-inherit" />            
        </div>

        <div className="flex-initial">
            <img key={currentIndex} src={images[(currentIndex+1)%3]} className="w-[15rem] rounded-3xl m-4 " />
        </div>

        <div className="flex-initial">
            <img key={currentIndex} src={images[(currentIndex+2)%3]} className="w-[10rem] rounded-3xl m-4 bg-gradient-to-r from-inherit" />
        </div>

        
        <div className="flex-initial" onClick={handleNext}>
          <img
            src="/images/angulo-izquierdo2.svg"
            alt="Back late"
            className="justify-item-center flex text-94 w-[4rem] pt-[6rem]"
          />
        </div>
      </div>




      
      
      <div className="relative m-auto overflow-hidden">
        {images.map((_, index) => (
          <div
            key={index}
            className={"w-[15rem] rounded-3xl m-4 "}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
