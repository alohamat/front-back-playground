import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";

import handbwl from "../assets/handbwl.png";
import handbwr from "../assets/handbwr.png";
import kid from "../assets/67kid.png"
import scp from "../assets/SCP-067.mp3"

export default function MainPage() {
  const [isSixSevening, setSixSevening] = useState(false);
  const navigate = useNavigate();
  const [play, { stop }] = useSound(scp, {interrupt: true});


  return (
    <div
      id="all"
      className={`h-screen w-screen flex bg-linear-to-br animated-bg overflow-hidden ${isSixSevening ? "bg-black" : "from-indigo-800 via-purple-900 to-blue-950"}`}
    >
      <div
        className={`flex-1 items-center justify-center text-[245px] ${
          isSixSevening ? "flex" : "hidden"
        }`}
      >
        <div className={`${isSixSevening ? "wiggle" : ""} ml-110`}>
          <p className="ml-15 text-gray-400 font-bold">6</p>
          <img src={handbwr} alt="mao" className="size-60" />
        </div>
      </div>
      <main className=" flex-1 flex flex-col items-center justify-center ">
        {isSixSevening ? (
          <div>
            <img src={kid} alt="67kid" className="size-150 zooming mb-15"/>
            <h1 className="text-4xl mb-15 text-red-600">67 KENDRICK IS LISTENING 67</h1>
          </div>
        ) : (
          <div className="flex flex-col mb-15 gap-15">
          <h1 className="text-white text-5xl">Hello, world!</h1>
          <button className="glass cursor-pointer" onClick={() => navigate("/dashboard")}>Go to dashboard</button>
          </div>
        )}
        <button
          className="glass cursor-pointer fixed bottom-0"
          onClick={() => {
            setSixSevening(!isSixSevening); (isSixSevening ? stop() : play())
          }}
        >
          Press here to Six Seven!
        </button>
      </main>
      <div
        className={`flex-1 items-center justify-center text-[245px] ${
          isSixSevening ? "flex" : "hidden"
        }`}
      >
        <div
          className={`${
            isSixSevening ? "wiggle2" : ""
          } text-gray-400 font-bold mr-110`}
        >
          7
          <img src={handbwl} alt="mao" className="size-60" />
        </div>
      </div>
    </div>
  );
}
