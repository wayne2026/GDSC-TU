import React from "react";
import logo from "../assets/logo.png";
import WavesSvg from "../components/WavesSvg";
import "../components/WavesSvg.css";
import ClubInsights from "./ClubInsights";
import Headers from "../components/Headers";
import Events from "./Events";
export default function Home() {
  return (
    <div className="h-screen">
      <Headers />
      <div className="">
        <div className="ml-[50px] mt-[250px] sm:mt-[120px]">
          <div className="ml-[115px]">
            <img
              src={logo}
              alt="Logo"
              className="sm:h-[100px] sm:ml-[450px]  m-3 mt-4 h-[35px] "
            />
          </div>
          <div className="sm:ml-[270px]">
            <h1 className="text-black  sm:text-[54px] text-[21px] dark:text-gray-300">
              Google Developer Students Clubs
            </h1>
            <h1 className="text-gray-500 sm:ml-[270px]  sm:text-[40px] text-[21px] dark:text-gray-300 ml-[80px]">
              Tezpur University
            </h1>
          </div>
        </div>
      </div>
      <div className="sm:w-[1450px] w-[650px] sm:mr-5 mt-5">
        <WavesSvg />
      </div>
      <div className="">
        <ClubInsights />
      </div>
      <div className="">
        <Events />
      </div>
    </div>
  );
}
