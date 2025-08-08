import React from "react";
import mainpic from "../../assets/pic1.jpg";
import "./Home.css";
import pic4 from "../../assets/first-pic.jpg";
import pic1 from "../../assets/pic3.jpg";
import pic2 from "../../assets/pic5.jpg";
import pic3 from "../../assets/party ID.jpg";
import pic5 from "../../assets/SimplifiedIT.jpg"
const Home = () => {
  return (
    <>
      <div className="homecont">
        <div
          className="imgcont"
          style={{
            backgroundImage: `url(${mainpic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "30rem",
            width: "20rem",
            border: "3px solid blue",
            borderRadius: "10px",
            margin:"1px"
          }}
        ></div>
        <div
          className="HeroimgCap"
          style={{
            backgroundColor: "rgb(29, 29, 225)",
            fontweight: "700",
            width: "15rem",
            textAlign: "center",
            margin: "0.5rem",
            padding: "0.5rem",
            border: "2px solid white",
            borderRadius: "10px",
            transition:"transform 0.5s ease"
          }}
        >
          Name: Abhisek Panda
          <br />
          Age: 19 <br />
          DOB: 04/04/2006
        </div>
      </div>
      <div style={{ padding: "20px 60px" }}>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{ backgroundColor: "rgb(20, 6, 79)" }}
            >
              <img
                src={pic1}
                className="d-block w-100 carousel-image"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5
                  style={{
                    fontWeight: "bold",
                    color: "rgba(221, 216, 240, 1)",
                  }}
                >
                  Awardrd by BBSR former Commissioner Mr. Soumendra Priyadarshi
                  <br /> after becoming topper in my school in Matric Exam
                </h5>
               
              </div>
            </div>

            <div
              className="carousel-item"
              style={{ backgroundColor: "rgb(20, 6, 79)" }}
            >
              <img
                src={pic2}
                className="d-block w-100 carousel-image"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5
                  style={{ fontWeight: "bold", color: "rgba(54, 31, 149, 1)" }}
                >
                  At Sambad Matric Championship
                </h5>
               
              </div>
            </div>
            <div
              className="carousel-item"
              style={{ backgroundColor: "rgb(20, 6, 79)" }}
            >
              <img
                src={pic3}
                className="d-block w-100 carousel-image"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={{ fontWeight: "bold", color: "rgb(20, 6, 79)" }}>
                  At BJP office
                </h5>
               
              </div>
            </div>
            <div
              className="carousel-item"
              style={{ backgroundColor: "rgb(20, 6, 79)" }}
            >
              <img
                src={pic4}
                className="d-block w-100 carousel-image"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5
                  style={{ fontWeight: "bold", color: "rgba(248, 246, 255, 1)" }}
                >
                  First Pic
                </h5>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{ backgroundColor: "rgb(20, 6, 79)" }}
            >
              <img
                src={pic5}
                className="d-block w-100 carousel-image"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5
                  style={{ fontWeight: "bold", color: "rgba(80, 24, 38, 1)" }}
                >
                  Awarded at 'Simplified Computer' Institute<br/> due to great performance in 12th IT Exam
                </h5>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
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

export default Home;
