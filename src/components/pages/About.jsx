import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="AboutHead">
        <h3>About</h3>
      </div>
      <div className="AboutDetails">
        <p>
          My name is Abhisek Panda and I live in Bhubaneswar. I live with my
          family. In my family there are four members & they are me, my mom & my
          two sisters. My dad has paased away 3 years ago due to brain stroke.
          My two sisters are engineers. I have completed my matriculation from
          Capital High School, unit-3 with the percentage of 96.5. I have
          completed my higher secondary education from BJB Higher Secondary
          School with the percentage of 90. Now, I am pursuing BTech in the
          branch of CSE(AIML) at OUTR,Bhubaneswar.
        </p>
        <br />
        <h4>Basic Details</h4>
        <br />
        <ol>
          <li>DOB: 04/04/2006</li>
          <li>Age: 19</li>
          <li>Blood Grp: O +ve</li>
        </ol>
        <br />
        <h4>Qualification Details</h4>
        <br />
        <ol>
          <li>
            <h5>Play School days</h5>
            <ul>
              <li>Baby Home PlaySchool</li>
              <li>class: Nursery to U-KG</li>
              <li>Year: 2009-2012</li>
              <li>Address: Saheed nagar, Bhubaneswr</li>
            </ul>
          </li>
          <li>
            <h5>Till matriculation</h5>
            <ul>
              <li>Saraswati Sishu Vidya Mandir</li>
              <li>class: I-VII</li>
              <li>Year: 2012-2019</li>
              <li>Address: Unit-3, Bhubaneswar</li>
            </ul>
            <br />
            <ul>
              <li>Capital High School</li>
              <li>Class: VIII-X</li>
              <li>Year: 2019-2022</li>
              <li>Address: Unit-3, Bhubaneswar</li>
              <li>10th percentage: 96.5%</li>
            </ul>
          </li>
          <li>
            <h5>Higher Secondary</h5>
            <ul>
              <li>BJB Higher Secondary School</li>
              <li>Class: XI,XII</li>
              <li>Year: 2022-2024</li>
              <li>Address: BJB Nagar, Bhubaneswar</li>
              <li>12th percentage: 90%</li>
            </ul>
          </li>
          <li>
            <h5>BTech</h5>
            <ul>
              <li>Odisha university of Technology and Research</li>
              <li>Branch: CSE(AIML)</li>
              <li>Course duration: 2024-2028</li>
              <li>Current Year: 2nd year</li>
              <li>1st Year CGPA: 9.16</li>
            </ul>
          </li>
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

export default About;
