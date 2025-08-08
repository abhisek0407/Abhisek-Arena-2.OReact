import React, { useState } from "react";
import "./Portfolio.css";
import { Link, NavLink } from "react-router-dom";
import ArenaSS from "../../assets/AbhisekArenaSS.png";
import Amazon from "../../assets/AmazonSS.png";
import TechSS from "../../assets/AbhisekTechSS.png";
import ArenaReactSS from "../../assets/ArenaReactSS.png";
import spotify from "../../assets/SpotifySS.png";
import Aware from "../../assets/AiAware.png";
import Appreciate from "../../assets/AiAppreciate.png";
import basicCourse from "../../assets/BasicComputerCourse.png";
import communication from "../../assets/communication.png";
import emailCourse from "../../assets/Email.png";
import presentation from "../../assets/presentation.png";
import Contactme from "../../assets/contact.png";
const projects = [
  {
    id: 1,
    title: "Abhisek Arena",
    image: ArenaSS,
    tech: "HTML, CSS, JS, Bootstrap",
    description:
      "My personal website showcasing my skills, hobbies, Internet Appearance, Certifications and contact information.",
    github: "https://github.com/abhisek0407/AbhisekArena",
  },
  {
    id: 2,
    title: "Amazon Clone",
    image: Amazon,
    tech: "HTML, CSS",
    description: "A clone website of Amazon.in home page",
    github: "https://github.com/abhisek0407/AmazonClone",
  },
  {
    id: 3,
    title: "Abhisek Tech",
    image: TechSS,
    tech: "HTML, CSS, BootStrap",
    description: "A simple website of online tutorial made by me",
    github: "https://github.com/abhisek0407/Abhisek-TECH",
  },
  {
    id: 4,
    title: "Abhisek Arena 2.O",
    image: ArenaReactSS,
    tech: "HTML, CSS, BootStrap, ReactJS",
    description:
      "An updatd version of Abhisek Arena  with an attractive layout design, showcasing my achievements, skills, hobbies, Projects, Certfications, Contact Informations ",
    github: "src/components/ComingSoon.html",
  },
  {
    id: 5,
    title: "Spotify Clone",
    image: spotify,
    tech: "HTML, CSS, JS",
    description:
      "A clone website of Spotify where you can also play and listen songs",
    github: "src/components/ComingSoon.html",
  },
];

const Portfolio = () => {
  const [selected, setSelected] = useState(null);

  const openModal = (project) => setSelected(project);
  const closeModal = () => setSelected(null);

  return (
    <>
      <nav className="portfolioNav">
        <ul>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#certifications" className="nav-link">
              Certifications
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
      <div className="portfolioAbout" id="about">
        <h2 className="portfolio-title">Goals & Future ambitions</h2>
        <p>
          👨‍💻Hello guys, My name is Abhisek Panda, currently pursuing BTech in
          the branch of CSE(AIML) at Odisha University of Technology & Research,
          Bhubaneswar. As a tech enthusiast with a hunger to learn new tech
          skills, I am now climbing on the tree of technology with a goal to go
          to the top of that tree.
          <br /> <br />
          💡 Currently I am enhancing my skills in Full-stack development, while
          working on personal projects that bridge the gap between theory and
          practice. <br /> <br />
          🎯My long-term goal is to become a skilled developer who can
          contribute to impactful tech innovations in both web and AI domains.{" "}
          <br /> <br />
          📌 Always open to opportunities for internships, collaborations, and
          learning experiences.
        </p>
      </div>{" "}
      <hr />
      <div className="portfolio-section" id="projects">
        <h2 className="portfolio-title">My Projects</h2>
        <div className="portfolio-container">
          {projects.map((project) => (
            <div
              className="card portfolio-card"
              key={project.id}
              onClick={() => openModal(project)}
            >
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text text-muted">{project.tech}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            onClick={closeModal}
          >
            <div
              className="modal-dialog modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selected.title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="img-fluid rounded mb-3"
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                  />
                  <p>{selected.description}</p>
                  <p className="text-muted">
                    <strong>Tech:</strong> {selected.tech}
                  </p>
                  <a
                    href={selected.github}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <hr />
      <div className="portfolio-section" id="certifications">
        <h2 className="portfolio-title">My Certifications</h2>
        <div className="portfolio-container">
          <div class="card portfolio-card">
            <img src={Aware} class="card-img-top" alt="Ai Aware" />
            <div class="card-body">
              <h5 class="card-title">AI Aware Certificate</h5>
              <p class="card-text">
                I have achieved this by doing AI Aware course provided by GOVT
                of Odisha.
              </p>
              <a href="src/assets/AiAware.png" class="btn btn-primary">
                View Certificate
              </a>
            </div>
          </div>
          <div class="card portfolio-card">
            <img src={Appreciate} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">AI Appreciate Certificate</h5>
              <p class="card-text">
                I have achieved this by doing AI Appreciate course provided by
                GOVT of Odisha.
              </p>
              <a href="src/assets/AiAppreciate.png" class="btn btn-primary">
                View Certificate
              </a>
            </div>
          </div>
          <div class="card portfolio-card">
            <img src={basicCourse} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Basic Computer Course</h5>
              <p class="card-text">
                I have achieved this certificate by doing Basic Computer Course
                of MS Office in 3 months duration
              </p>
              <a
                href="src/assets/BasicComputerCourse.png"
                class="btn btn-primary"
              >
                View Certificate
              </a>
            </div>
          </div>
          <div class="card portfolio-card">
            <img src={presentation} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">TCS iON presentation skills</h5>
              <p class="card-text">
                I have achieved this certificate by doing TCS iON's presentation
                skills course
              </p>
              <a href="src/assets/presentation.png" class="btn btn-primary">
                View Certificate
              </a>
            </div>
          </div>
          <div class="card portfolio-card ">
            <img src={emailCourse} class="card-img-top" alt="..." />
            <div class="card-body ">
              <h5 class="card-title">TCS iON Email Etiquette</h5>
              <p class="card-text">
                I have achieved this certificate by doing TCS iON's Email
                Etiquette course.
              </p>
              <a href="src/assets/Email.png" class="btn btn-primary">
                View Certificate
              </a>
            </div>
          </div>
          <div class="card portfolio-card">
            <img src={communication} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">TCS iON Communication skills</h5>
              <p class="card-text">
                I have achieved this by doing TCS iON's Communication skills
                course
              </p>
              <a href="src/assets/communication.png" class="btn btn-primary">
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* Contact Preview Section */}
      <div className="portfolio-section contact-preview"  id="contact">
        <h2 className="portfolio-title">Get In Touch</h2>
        <div className="contact-preview-content">
          <img src={Contactme} alt="Contact" className="contact-image" />
          <div className="contact-text">
            <p className="mb-3">
              Want to collaborate, hire or just say hi? I’m always open to
              connect!
            </p>
            <NavLink
              to="/Contact"
              className="btn btn-outline-primary contact-btn"
            >
              Contact me
            </NavLink>
          </div>
        </div>
      </div>
      <footer>
        <div class="foot-panel">
          <p> © 2025 Abhisek Arena. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
