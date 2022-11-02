/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Slide from "react-reveal/Slide";
import {newss} from "../contants/index.jsx";

const news = () => {
  return (
    <div className="mt-[15rem] bg-tertiary">
      <div className="container mx-auto">
        <Slide left>
          <h1 className="text-secondary text-[5rem] text-center pt-[5rem]">
            Önəmli Hadisələr
          </h1>
        </Slide>
        <Slide right>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-[5rem]">
            {newss.map((news) => (
              <div className="relative bg-white rounded-3xl border-2 shadow-lg hover:bottom-[0.5rem] transition-all duration-1000" key={news.id}>
                <img
                  src={news.img}
                  alt=""
                  className="w-[40rem] h-[27rem] rounded-xl transition-all duration-1000"
                />
                <h1 className="text-secondary text-[2.4rem] py-[2rem] px-[1.8rem]">
                  {news.title}
                </h1>
                <p className="pb-[3rem] px-[1.8rem] text-[1.5rem]">
                  {news.text}
                </p>
                <a
                  href="#"
                  className="mx-[1.8rem] mb-[3rem] flex items-center gap-x-5 text-[1.4rem] hover:text-secondary"
                >
                  Read More
                  <AiOutlineArrowRight />
                </a>
              </div>
            ))}
          </div>
        </Slide>

        <div className="grid place-content-center pb-[10rem]">
          <a href="#" className="btn  place-content-center">
            Daha Çox Məlumat
          </a>
        </div>
      </div>
    </div>
  );
};

export default news;
