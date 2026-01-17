import React, { useState } from "react";
import frameImg from "../assets/Frame (1).png";
import videoImg from "../assets/Image.png";
import waltonImg from "../assets/walton-seeklogo 1.png";
import { FaArrowUpLong, FaBolt, FaBullseye, FaStar } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";

const HeroRight = () => {
  const [play, setPlay] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="lg:w-1/2">
        <div className=" border-[#C7D2FE4D] p-6 rounded-3xl bg-linear-to-r from-[#F1F1FD] to-[#F5E9FB] ">
          <img src={frameImg} className="size-14" alt="" />
          <div className="flex items-center mt-2 mb-.5">
            <h2 className="font-bold text-5xl">200%</h2>
            <FaArrowUpLong className="text-[#01BC49FF] text-xl" />
          </div>
          <p className="font-semibold text-[16px text-[#060606CC] mb-1.5">
            More Conversions
          </p>
          <p className="text-sm text-[#060606B3]">Than Industry Average</p>
        </div>
         <div className="relative mt-6">
      {!play ? (
        <div onClick={() => setPlay(true)} className="cursor-pointer">
          <img src={videoImg} alt="" className="rounded-3xl" />

          <div className="absolute bottom-4 pl-5 text-white">
            <h4>Watch Case Study</h4>
            <p>2:45 min</p>
          </div>
        </div>
      ) : (
        <video
          src={videoImg}
          className="rounded-3xl w-full"
          controls
          autoPlay
        />
      )}
    </div>
      </div>
      <div className="lg:w-1/2 lg:relative ">
        <div className="border border-[#B4D5F9] p-3 rounded-3xl bg-linear-to-br from-[#C4DBF5] to-[#ECF1F8] lg:absolute lg:top-10">
          <h4 className="font-bold text-lg inter-font text-[#060606] mb-2">
            Our Track Record
          </h4>
          <div className="space-y-3 w-full">
            <div className="p-2 bg-white rounded-2xl border-[#B4D5F9] border">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-linear-to-br from-[#C4DBF5] to-[#ECF1F8] p-2">
                  <FiUsers className="text-[#2685ee]" />
                </div>

                <div className="flex items-center inter-font gap-1.5">
                  <h2 className="font-bold text-xl">500+</h2>
                  <p className="font-bold text-sm text-secondary">Clients</p>
                </div>
              </div>
            </div>
            <div className="p-2 bg-white rounded-2xl  border-[#B4D5F9] border">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-linear-to-br from-[#C4DBF5] to-[#ECF1F8] p-3">
                  <FaBullseye className="text-[#2685ee]" />
                </div>

                <div className="flex items-center inter-font gap-1.5">
                  <h2 className="font-bold text-xl">98%</h2>
                  <p className="font-bold text-sm text-secondary">Success</p>
                </div>
              </div>
            </div>
            <div className="p-2 bg-white rounded-2xl border-[#B4D5F9] border">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-linear-to-br from-[#C4DBF5] to-[#ECF1F8] p-3">
                  <FaBolt className="text-[#2685ee]" />
                </div>

                <div className="flex items-center inter-font gap-1.5">
                  <h2 className="font-bold text-xl">24h</h2>
                  <p className="font-bold text-sm text-secondary">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-linear-to-br from-[#FEEFDB] to-[#FCF2F2] border border-[#FDE1BF] rounded-3xl w-full  p-4 space-y-3 mt-6 lg:absolute lg:top-72">
          <img src={waltonImg} alt="" className="w-15.5 h-10.25" />
          <div className="flex gap-2">
            <FaStar className="text-[#F45925]" />
            <FaStar className="text-[#F45925]" />
            <FaStar className="text-[#F45925]" />
            <FaStar className="text-[#F45925]" />
            <FaStar className="text-[#F45925]" />
          </div>
          <p className="font-medium text-lg">"Their marketing strategies are simply outstanding"</p>
        </div>
      </div>
    </div>
  );
};

export default HeroRight;
