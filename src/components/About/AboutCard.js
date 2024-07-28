import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My name is <span className="purple"> Umer Hamid </span>
            and I'm from <span className="purple">Lahore, Pakistan. </span>
            I am currently a Computer Science Senior Student at <span className="purple">FAST NUCES Lahore</span>
            <br />
            <br />
              
            I have successfully developed various projects in countless domains and have managed to maintain a high-quality of work
            through my hard work and dedication.
            <br />
            <br />
              
            I have also worked as a Software Engineering Intern at CarbonTeq, where I engaged in creation of different projects, gaining expertise in various web related technologies.
            <br />
            <br />
            Apart from coding, I also enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Working Out
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
