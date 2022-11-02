/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { BsTelephonePlus } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Slide from "react-reveal/Slide";

const contact = () => {
  return (
    <div className="container mx-auto my-[5rem]">
      <h1 className="text-secondary text-[3rem] text-center mb-[3rem]">
        Əlaqə və Ünvan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[5rem] gap-y-[5rem]">
        <Slide left>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1657.537525895603!2d49.83616013622405!3d40.365914849271185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307db59b9c59e1%3A0x3e8a6a7265ef2287!2zMzEsIDMzIEFzyZlmIFpleW5hbGzEsSBrw7zDpywgQmFrxLEsIEF6ZXJiYXljYW4!5e0!3m2!1str!2s!4v1667420082660!5m2!1str!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Slide>
        <Slide right>
          <div className="mt-0 md:mt-[10rem]">
            <div className="flex items-center gap-x-[2rem] mb-[3rem]">
              <div className="text-[5rem]">
                <BsTelephonePlus />
              </div>
              <div className="flex flex-col">
                <h1 className="text-bold text-[2rem]">Telefon</h1>
                <p className="text-[1.6rem]">(+99412)-437-3351</p>
              </div>
            </div>
            <div className="flex items-center gap-x-[2rem] mb-[3rem]">
              <div className="text-[5rem]">
                <AiOutlineMail />
              </div>
              <div className="flex flex-col">
                <h1 className="text-bold text-[2rem]">Email</h1>
                <p className="text-[1.6rem]">afss@futurestudies.az </p>
              </div>
            </div>
            <div className="flex items-center gap-x-[2rem] mb-[3rem]">
              <div className="text-[5rem]">
                <GoLocation />
              </div>
              <div className="flex flex-col">
                <h1 className="text-bold text-[2rem]">Ünvan</h1>
                <p className="text-[1.6rem]">
                  Azerbaijan Future Studies Society,İçəri Şəhər, Asəf Zeynallı küç. 31/33
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default contact;
