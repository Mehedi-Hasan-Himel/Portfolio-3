import React from "react";
import { Link } from "react-router-dom";
import WomanImg from "../img/home/woman.png"
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Home = () => {
  return (
    <section className="section bg-blue-200">
      <div className="container mx-auto h-full relative">
        {/* Text and Image wrapper */}
        <div className="flex flex-col justify-center">
          {/* text */}
          <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">
              Photographer and <br /> & Film Maker
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Los Angeles, USA
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              Hire Me
            </Link>
          </div>
          {/* image */}
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <div className="relative lg:-right-40 overflow-hidden">
              <img src={WomanImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
