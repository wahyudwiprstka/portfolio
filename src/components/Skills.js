import { Col, Row } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/sharp.png";
import eclipse from "../assets/img/eclipse.svg";
import intellij from "../assets/img/intellij.svg";
import netbeans from "../assets/img/netbeans.svg";
import postman from "../assets/img/postman.svg";
import axure from "../assets/img/axure.svg";

import './css/Skills.css';

export const Skills = () => {
  const icons = {
    fontSize: "60px",
    padding: "5px"
  };

  const coloumn = {
    padding: "10px"
  };

  const imgicon = {
    width: "65px",
  };



  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Languages, Framework & Database</p>
              <Row className='text-center'>
                <Col style={coloumn}>
                  <i className="devicon-angularjs-plain size-small" style={icons}></i> <br />
                  Angular
                </Col>
                <Col style={coloumn}>
                  <i className="devicon-bootstrap-plain" style={icons}></i> <br />
                  Bootstrap
                </Col>
                <Col style={coloumn}>
                  <i className="devicon-css3-plain" style={icons}></i> <br />
                  CSS
                </Col>
                <Col style={coloumn}>
                  <i className="devicon-git-plain" style={icons}></i> <br />
                  Git
                </Col>
                <Col style={coloumn}>
                  <i className="devicon-html5-plain" style={icons}></i> <br />
                  HTML
                </Col>
                <Col style={coloumn}>
                  <i className="devicon-java-plain" style={icons}></i> <br />
                  Java
                </Col>
                <Col style={coloumn}>
                  <i className="devicon-javascript-plain" style={icons}></i> <br />
                  JavaScript
                </Col>
                <Col style={coloumn}>
                  <i className="devicon-mysql-plain" style={icons}></i>
                  <br />
                  MySQL
                </Col>
                <Col style={coloumn}>
                  <i className="devicon-react-original" style={icons}></i> <br />
                  React JS
                </Col>
                <Col style={coloumn}>
                  <i className="devicon-spring-plain" style={icons}></i> <br />
                  Spring
                </Col>
              </Row>
              <p style={{ marginTop: "3rem" }} >Application Software</p>
              <Row>
                <Col style={coloumn}>
                  <i class="devicon-androidstudio-plain" style={icons}></i> <br />
                  Android Studio
                </Col>
                <Col style={coloumn}>
                  <img src={axure} alt="Logo" style={imgicon} /> <br />
                  Axure RP
                </Col>
                <Col style={coloumn}>
                  <i class="devicon-figma-plain" style={icons}></i> <br />
                  Figma
                </Col>
                <Col style={coloumn}>
                  <img src={eclipse} alt="Logo" style={imgicon} /><br />
                  Eclipse IDE
                </Col>
                <Col style={coloumn}>
                  <img src={intellij} alt="Logo" style={imgicon} /> <br />
                  IntellIj IDEA
                </Col>
                <Col style={coloumn}>
                  <img src={netbeans} alt="Logo" style={imgicon} /> <br />
                  Netbeans
                </Col>
                <Col style={coloumn}>
                  <img src={postman} alt="Logo" style={imgicon} /> <br />
                  Postman
                </Col>
                <Col style={coloumn}>
                  <i class="devicon-vscode-plain" style={icons}></i><br />
                  Visual Studio Code
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image" src={colorSharp} alt="Image" />
    </section >
  )
}
