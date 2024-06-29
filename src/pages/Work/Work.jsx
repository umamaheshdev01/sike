import React from "react";
import "./work.css";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import WorkItem from "./WorkItem";
import Image1 from '../../projects/moviewebsite/img4.png'
import Image2 from '../../projects/moviewebsite/img3.png'

gsap.registerPlugin(useGSAP);

const Work = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".col .work-item", { y: 300, stagger: 0.025, opacity: 0 });
    },
    { scope: container }
  );

  return (
    <div className="container page-work" ref={container}>
      <div className="col">
      <WorkItem
          imgUrl={Image1}
          containerHeight="400"
          workName="Movies Forever"
          workDate="December 2022"
          type="blog"
          url="/movies"
        />
      </div>

      <div className="col">


      <WorkItem
          imgUrl={Image2}
          containerHeight="400"
          workName="Movies Forever"
          workDate="December 2022"
          type="img"
          url="/movies"
        />
        
        
      </div>

      <div className="col">
        {/* <WorkItem
          imgUrl={WorkImage7}
          containerHeight="250"
          workName="Work Name"
          workDate="April 2024"
          type="article"
          url="/post"
        />
        <WorkItem
          imgUrl={WorkImage22}
          containerHeight="350"
          workName="Work Name"
          workDate="April 2024"
          type="img"
          url="/post"
        />
        <WorkItem
          imgUrl={WorkImage16}
          containerHeight="400"
          workName="Work Name"
          workDate="April 2024"
          type="blog"
          url="/post"
        /> */}
      
      </div>
    </div>
  );
};

export default Work;
