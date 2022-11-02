import React from "react";
import homebg from "../img/homebg.jpg";
import Navbar from "./navbar";
import "../../src/App.css";
import Typical from "react-typical";


const home = () => {
  return (
    <div
      className="h-screen w-full home"
      style={{
        backgroundImage: `url(${homebg})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        backgroundPosition: `relative`,
      }}
    >
        <div className="container mx-auto z-50 relative">
        <div className="flex flex-col relative">
          <div className="">
            <Navbar />
          </div>
          <div className="flex flex-col items-start justify-center h-[40rem] my-[5rem]">
            <div className="text-white text-[4rem]">
              <Typical
                steps={["Azərbaycan Futuroloqlar Cəmiyyəti", 1000]}
                loop={1}
                wrapper="b"
              />
            </div>
            <p className="text-[#eeeeee] text-[1.6rem] opacity-70 w-[70%] py-[2rem]">
              Azərbaycan Futuroloqlar Cəmiyyəti (AFSS) 2006-cı ilin yanvarında
              qeyri-kommersiya tədqiqat mərkəzi kimi yaradılıb.Bu, mövcud
              tendensiyaları öyrənmək və gələcək tendensiyaları proqnozlaşdırmaq
              məqsədi ilə Azərbaycanda ilk belə tədqiqat mərkəzidir.
            </p>
            <button className="btn">Daha Çox Məlumat</button>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default home;
