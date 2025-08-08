import React, { useState } from "react";
import { useTheme } from "../ThemeContext";
import { Link, NavLink } from "react-router-dom";
import Logopic from "../assets/A logo.png";
import sunPic from "../assets/sun.png";
import MoonPic from "../assets/moon.png";
import "./Navbar.css";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header>
        <nav>
          <div className="NavLogoCapcont" style={{ display: "flex" }}>
            <img
              src={Logopic}
              alt=""
              style={{
                width: "4.5rem",
                height: "100%",
                marginLeft: "0.5rem",
                marginRight: "0.5rem",
                marginTop: "0.2rem",
              }}
            />
            <h5 style={{ marginTop: "0.2rem", fontWeight: "bold" }}>
              Abhisek <br />
              Arena
            </h5>
          </div>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <NavLink
                to="/"
                onClick={() => {
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                }}
              >
                Home
              </NavLink>
            </li>
            <li
              onClick={() => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
              }}
            >
              <NavLink
                to="/About"
                onClick={() => {
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Portfolio"
                onClick={() => {
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                }}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Skills"
                onClick={() => {
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                }}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                onClick={() => {
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                }}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <img
                src={theme === "dark" ? sunPic : MoonPic}
                alt=""
                style={{ width: "2rem", height: "100%", cursor: "pointer" }}
                onClick={toggleTheme}
              />
            </li>
          </ul>
        </nav>
        <div className="achieve">
          <div className="achievement">Achievements</div>
          <div className="achieve-list">
            <marquee direction="left">
              ..NMMS Scholarship holder & Khordha district topper in NMMS
              exam..., NRTS, Pathani Samanta, Junior merit, E-Medhabruti,
              Central Sector Scheme of Scholarship, Vikash Educational
              Charitable Trust Scholarship holder..., Winner of Konark
              Foundation Quiz competition among all participants of Khordha
              District..., School topper in 10th class & BJB College's fourth
              topper in 12th..., BJP youth member in 2024 election..., School
              representative to join 5th meeting with Honourable former CM Shree
              Naveen Pattanaik sir with all other representatives of different
              schools
            </marquee>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
