import React from "react";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./photos.css";


gsap.registerPlugin(useGSAP);

const Photos = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".photos-col img", { y: 300, stagger: 0.025, opacity: 0 });
    },
    { scope: container }
  );

  return (
    <div className="container page-photos" ref={container}>
      <div className="photos-col">
       
      </div>
      <div className="photos-col">
        
      </div>
      <div className="photos-col">
        
      </div>
    </div>
  );
};

export default Photos;
