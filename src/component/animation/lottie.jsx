"use client"
import Lottie from "lottie-react";
import animationData from "../../../public/lottie/search.json";
import { useEffect } from "react";

const Animation = () => {
    useEffect(() => {
        // Safe to use document here
        const element = document.getElementById("my-element");
      }, []);
  return (
    <div className="flex justify-center">
      <Lottie src="/lottie/search.json"
            background="transparent"
            speed="1"
            style={{ width: '700px', height: '300px' }}
            loop
            autoplay animationData={animationData}  />
    </div>
  );
};

export default Animation;