import React from "react";
import "./post.css";

import { FaLink } from "react-icons/fa";

import PostImage1 from './image1.png'
import PostImage2 from './img2.png'

const Movie = () => {
  return (
    <div className="container page-post">
      <div className="post-header">
        <div className="post-info">
          <p>Movies Forever </p>
          <p>December 2022</p>
        </div>
        <div className="post-link">
         <a href="https://movietickets-two.vercel.app/"> <FaLink size="14px" style={{ color: "hsl(0 0% 60%)" }} /></a>
        </div>
      </div>

      <div className="post-content">
        <p >
          A Movie booking site inspired from Book My Show with some creative touch. This is my first project
          which helped me find my intrest in web development.
        </p>

        <p>Built with basic <span style={{color:'green'}}> HTML , CSS and Vanilla Js</span>.</p>

        

        <div className="post-img post-img-1">
          <img src={PostImage1} alt="" />
        </div>

        <p>
        

          I didn't use a great techstack for the project. I used pure HTML,CSS and JS to do this project.As it was my first project it took
          me more than a week to do this project.The challenges i faced during working on the project is my own creativity.
          </p>
          
          <p>Intially I made a prototype for the project which was very bad looking. I tried my best to improve the UI of the website so 
          I restarted the whole project from scratch, this time i made it quicker then before since my past experience helped me.
          And finally got a beautiful output.
        </p>

        <div className="post-img post-img-2">
          <img src={PostImage2} alt="" />
        </div>

        <p>
          The only limitions of the projects was backened which i really dont know how to do at this moment and responsiveness
          , it took me time to understand about designs , layouts and optimizing things for mobile.
        </p>

        <p>
          Github Link for my project  <a style={{cursor:'pointer',color:'cyan'}} href="https://github.com/umamaheshdev01/Movie-Website">https://github.com/umamaheshdev01/Movie-Website</a>
        </p>

        <p>
          Live Link for my project  <a style={{cursor:'pointer',color:'cyan'}} href="https://movietickets-two.vercel.app/">https://movietickets-two.vercel.app/</a> (Only in pc)
        </p>

      </div>

      <div className="white-space"></div>
    </div>
  );
};

export default Movie;
