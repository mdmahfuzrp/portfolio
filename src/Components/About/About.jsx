import React from "react";
import "./About.css";
import './only.css'
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import { Facebook } from "@material-ui/icons";
import { BsGithub } from "react-icons/bs";
import { DiGithub } from "react-icons/di";
import { FaGithubSquare } from "react-icons/fa";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead top-head-mrp">
          Hello, I am <span className="about__name">Md Mahfuz RP</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
        "Experienced Developer and Programmer proficient in React.js, Next.js, Redux, TypeScript, JavaScript, Socket.io, Mongoose, MongoDB, Express.js, MySQL etc. Committed to delivering high-quality code and seamless user experiences to drive innovation."
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/mdmahfuzrp"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <FaGithubSquare size={21} />
          </a>
          <a
            href="mailto:mahfuzrpsmorg@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/mdmahfuzrp"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="tel:+8801855277095"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <Facebook />
          </a>
          
        </div>

        <div class="w-full h-40 flex items-center justify-center" style={{marginLeft: '-10px'}}>
          <a href="https://bd.linkedin.com/in/mdmahfuzrp" class="relative inline-block text-lg group" target="_blank">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span class="relative no-no-btn">Talk To Me</span>
            </span>
            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
