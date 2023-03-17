import React from "react";
import { ButtonYellowComp } from "./ButtonYellowComp";
import FlyImage from "../assets/fly.jpeg";
import MapImage from "../assets/map.jpeg";

export const WorldTourComp = () => {
  return (
    <div className="h-[80%] px-20 py-10">
      <div>
        <p className="text-3xl mt-1 text-center">
          We Will Take You All Over The World From<br></br>
          <span className="text-[#3781c5]">End To End Safely And Happily</span>
        </p>
        <div
          className="bg-contain w-full h-[900px]"
          style={{
            backgroundImage: `url("${MapImage}")`,
          }}
        ></div>
      </div>
    </div>
  );
};
