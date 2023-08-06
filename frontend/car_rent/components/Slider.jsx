import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Slider = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === data.length - 1 ? 0 : prevSlide + 1
      );
    }, 8000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [data]);
  let slidePointsDelay = 0
  return (
    <div className="w-full flex flex-col items-center">
      {data.map((slide, index) => 
        (
            <motion.div
            key={index}
            className={`text-white w-full`}
            >
                {currentSlide === index && (
                    <motion.div
                    className={`text-white gap-10 w-full items-center grid grid-cols-12
                    px-10`}
                    >
                        <div className="flex flex-col gap-7 items-center col-span-4">
                            <motion.img src={slide.image} 
                                className="w-[300px] h-[300px] object-cover rounded-full shadow-lg"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                            <motion.h4
                            className="font-bold cursor-pointer text-gray-200 hover:text-white"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            >
                                {slide.name}
                            </motion.h4>
                        </div>
                        {/* <div className=""></div> */}
                        <div className="flex flex-col gap-6 col-span-7">
                            <motion.h4 className="flex gap-2"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 , delay: 0}}
                            >
                                <span
                                className="font-semibold"
                                >
                                    Adress:
                                </span> <span>{slide.address}</span>
                            </motion.h4>
                            <motion.h4 className="flex gap-2"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 , delay: 0.1}}>
                                <span
                                className="font-semibold"
                                >
                                    Bio:
                                </span> <span>{slide.description}</span>
                            </motion.h4>
                            <motion.h4 className="flex gap-2"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 , delay: 0.2}}
                            >
                                <span
                                className="font-semibold"
                                >
                                    Avg rate:
                                </span> <span>{slide.rate}</span> <span className="text-yellow-400">★</span>
                            </motion.h4>

                            <motion.h4 className="flex gap-2"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 , delay: 0.3}}
                            >
                                <span
                                className="font-semibold"
                                >
                                    Owned Cars:
                                </span> {slide.cars.map((car, index) => (
                                    <span key={index}>{index < slide.cars.length-1 ? car+", " : car}</span>
                                ))}
                            </motion.h4>

                            <motion.h4 className="flex gap-2"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 , delay: 0.4}}
                            >
                                <span
                                className="font-semibold"
                                >
                                    Phone number:
                                </span> <span>{slide.phone}</span>
                            </motion.h4>

                            <motion.h4 className="flex gap-2"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 , delay: 0.5}}
                            >
                                <span
                                className="font-semibold"
                                >
                                    Email:
                                </span> <span>{slide.email}</span>
                            </motion.h4>
                        </div>
                    </motion.div>
                )}

                

            </motion.div>
        )
      )}
      <div
        className="w-1/2 mt-20 flex gap-6 items-center justify-center"
        >
            {data.map((_, index) =>{ 
                slidePointsDelay += 0.05
                return (
                    <motion.div
                    className={`rounded-full cursor-pointer
                    ${currentSlide === index ? "bg-white h-3 w-3" : "bg-gray-400 h-2 w-2"}
                    ease-in-out duration-300
                    `}
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 , delay: slidePointsDelay}}
                    onClick={() => setCurrentSlide(index)}
                    ></motion.div>
                )})}
        </div>
    </div>
  );
};

export default Slider;