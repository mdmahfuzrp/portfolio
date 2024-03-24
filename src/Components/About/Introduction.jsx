import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_fw14_056.png";
import { CheckBoxOutlineBlank, CheckBoxRounded, CheckBoxSharp, CheckBoxTwoTone } from "@material-ui/icons";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
            <figure class="swing">
  <img src={profilePic} width="200" />
</figure>  
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Started my corporate career as a Frontend Engineer at Selecornya, where I polished up my skills in creating cool user interfaces. Now, I'm rocking it as a Software Engineer and leading the frontend squad at Alzaf Limited. I'm your go-to person for making web application not just work, but work with style. My goal is always top-notch code and making users go <span className="different">"Wow!"</span> with their online experience. And yes because of my problem solving skills my secret to coding superpowers is a never-ending supply of coffee!
              </h4>
              <h4 className="terms-intro">Terms that can describe me:</h4>
              <div className="parent-describe">
              <ul className="my-describe">
                <li><CheckBoxRounded /><span>Public speaking.</span></li>
                <li><CheckBoxRounded /><span>Programming contest.</span></li>
                <li><CheckBoxRounded /><span>Problem solvings.</span></li>
                <li><CheckBoxRounded /><span>Coading teaching.</span></li>
                
              </ul>
              <ul className="my-describe"><li><CheckBoxRounded /><span>Book reading.</span></li>
                <li><CheckBoxRounded /><span>Listening podcasts.</span></li>
                <li><CheckBoxRounded /><span>Technology research.</span></li>
                <li><CheckBoxRounded /><span>Travelling.</span></li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
