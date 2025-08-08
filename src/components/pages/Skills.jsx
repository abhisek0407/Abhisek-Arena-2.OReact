import React from "react";
import "./Skills.css";
import Java from "../../assets/JSLogo.png";
import JSpic from "../../assets/JS-logo.png";
import tailwind from "../../assets/TailwindLogo.png";
import sql from "../../assets/sqlLogo.png";
import Clogo from "../../assets/CLogo.png";
import cricket from '../../assets/cricket.jpeg';
import writings from '../../assets/writings.jpeg'
import painting from '../../assets/painting.jpeg'
import novel from "../../assets/novel.png";
import tech from '../../assets/tech.jpeg'
const Skills = () => {
  return (
    <>
      <div className="SkillsHead">
        <h3>Skills</h3>
      </div>
      <div className="skillList">
        <div
          className="skillListcont"
          style={{ border: "2px solid blueviolet" }}
        >
          <div className="subList">
            <i
              className="fa-brands fa-java"
              style={{ fontSize: "2rem", paddingRight: "1rem" }}
            ></i>

            <h3>Java</h3>
          </div>
          <div className="subList">
            <i
              className="fa-brands fa-java"
              style={{ fontSize: "2rem", paddingRight: "1rem" }}
            ></i>

            <h3>Java Swing</h3>
          </div>
          <div className="subList">
            <i
              className="fa-solid fa-code"
              style={{ fontSize: "2rem", paddingRight: "1rem" }}
            ></i>
            <h3>HTML</h3>
          </div>

          <div className="subList">
            <i
              className="fa-brands fa-bootstrap"
              style={{ fontSize: "2rem", paddingRight: "1rem" }}
            ></i>

            <h3>BootStrap</h3>
          </div>
          <div className="subList">
            <i
              className="fa-brands fa-react"
              style={{ fontSize: "2rem", paddingRight: "1rem" }}
            ></i>

            <h3>ReactJS</h3>
          </div>
        </div>
        <div className="skillListcont" style={{ border: "2px solid blueviolet" }}>
          <div className="subList">
            <img
              src={Clogo}
              alt=""
              style={{ width: "4rem", paddingRight: "1rem" }}
            />
            <h3>C</h3>
          </div>
          <div className="subList">
            <i
              className="fa-brands fa-css3-alt"
              style={{ fontSize: "2rem", paddingRight: "1rem" }}
            ></i>
            <h3>CSS</h3>
          </div>
          <div className="subList">
            <img
              src={JSpic}
              alt=""
              style={{ width: "4rem", paddingRight: "1rem" }}
            />
            {/* <i
              className="fa-brands fa-java"
              style={{ fontSize: "2rem", paddingRight: "1rem" }}
            ></i> */}

            <h3>Java Script</h3>
          </div>
          <div className="subList">
            <img
              src={tailwind}
              alt=""
              style={{ width: "4rem", paddingRight: "1rem" }}
            />
            <h3>Tailwind CSS</h3>
          </div>
          <div className="subList">
            <img
              src={sql}
              alt=""
              style={{ width: "4rem", paddingRight: "1rem" }}
            />
            <h3>MySQL</h3>
          </div>
        </div>
      </div>
      <hr />
      <div className="SkillsHead">
        <h3>Hobbies</h3>
      </div>
      <div className="HobbiesList">
        <ol>
          <li>
             <h3>1.</h3>
            <img
              src={cricket}
              alt=""
              style={{ width: "4rem", paddingRight: "1rem" }}
            />
            <h3 style={{ fontWeight:'bold'}}>Cricket</h3>
          </li><hr style={{width:'60%'}}/>
          <li>
             <h3>2.</h3>
            <img
              src={writings}
              alt=""
              style={{ width: "4rem", paddingRight: "1rem" }}
            />
            <h3 style={{ fontWeight:'bold'}}>Creative Writings(Stories, poems, Sayaris)</h3>
          </li><hr style={{width:'60%'}}/>
           <li>
            <h3>3.</h3>
            <img
              src={painting}
              alt=""
              style={{ width: "4rem", paddingRight: "1rem" }}
            />
            <h3 style={{ fontWeight:'bold'}}>Painting</h3>
          </li><hr style={{width:'60%'}}/>
          <li>
            <h3>4.</h3>
            <img
              src={novel}
              alt=""
              style={{ width: "4rem", paddingRight: "1rem" }}
            />
            <h3 style={{ fontWeight:'bold'}}>Reading novels</h3>
          </li><hr style={{width:'60%'}}/>
          <li>
            <h3>5.</h3>
            <img
              src={tech}
              alt=""
              style={{ width: "4rem", paddingRight: "1rem" }}
            />
            <h3 style={{ fontWeight:'bold'}}>Hunger to learn Technology skills</h3>
          </li><hr style={{width:'60%'}}/>
        </ol>
      </div>
      <footer>
        <div class="foot-panel">
           <p> © 2025 Abhisek Arena. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Skills;
