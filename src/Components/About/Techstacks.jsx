import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiNextdotjs,
  SiTypescript,
  SiSocketdotio,
  SiJira,
  SiTrello,
  SiSlack,
  SiFigma,
  SiAmazonaws
} from "react-icons/si";
import { DiAws, DiCss3, DiGit, DiJira, DiMongodb } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";
import { AutorenewSharp } from "@material-ui/icons";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          
        <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          
          <div>
            <SiTailwindcss />
            <h5>Tailwind</h5>
          </div>
          
          <div>
            <SiMaterialui />
            <h5>Material Ui</h5>
          </div>
          
          <div>
            <SiJavascript />
            <h5>JavaScript</h5>
          </div>
          <div>
            <SiTypescript />
            <h5>TypeScript</h5>
          </div>
          <div>
            <FaReact />
            <h5>React.JS</h5>
          </div>

          <div>
            <SiNextdotjs />
            <h5>Next.JS</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
            <SiSocketdotio />
            <h5>Socket.io</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Node.JS</h5>
          </div>
          
          <div>
            <SiExpress />
            <h5>Express.JS</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div>
            <DiGit />
            <h5>Git</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiTrello />
            <h5>Trello</h5>
          </div>
          <div>
            <SiSlack />
            <h5>Slack</h5>
          </div>
          <div>
            <SiJira />
            <h5>Jira</h5>
          </div>
          <div>
            <SiFigma />
            <h5>Figma</h5>
          </div>
          <div>
            <SiAmazonaws />
            <h5>AWS</h5>
          </div>
        </div>
      </div>
    </>
  );
};
