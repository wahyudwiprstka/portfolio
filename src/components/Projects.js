import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import abccars from "../assets/img/abccars.png";
import abcjobs from "../assets/img/abcjobs.png";
import abclearningcenter from "../assets/img/abclearningcenter.png";
import colorSharp2 from "../assets/img/sharp2.png";
import cafecashier from "../assets/img/cafecashier.png";
import healclin from "../assets/img/healclin.png";
import tokosaham from "../assets/img/tokosaham.png";
import kyn from "../assets/img/kyn.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

import './css/Projects.css'

export const Projects = () => {

  const websites = [
    {
      link: 'https://github.com/wildanlh/ABC-Cars',
      title: "ABC Cars",
      year: "November - December 2022",
      description: "Website App Development | Car Dealership Web",
      imgUrl: abccars,
    },
    {
      link: 'https://github.com/wildanlh/ABC-Jobs',
      title: "ABC Jobs",
      year: "August - October 2022",
      description: "Website App Development | Community Portal Web",
      imgUrl: abcjobs,
    },
    {
      link: 'https://github.com/wildanlh/ABC-Learning-Center',
      title: "ABC Learning Center",
      year: "March - April 2022",
      description: "Front End Development | Course Web",
      imgUrl: abclearningcenter,
    },
    {
      link: 'https://github.com/wildanlh/Know-Your-Neighborhood',
      title: "Know Your Neighborhood",
      year: "December 2022 - January 2023",
      description: "Website App Development | Store Web",
      imgUrl: kyn,
    }
  ];

  const mobiles = [
    {
      link: 'https://github.com/wildanlh/CafeCashier',
      title: "CafeCashier",
      year: "May 2022",
      description: "Android Development | Cashier App",
      imgUrl: cafecashier,
    },
    {
      link: 'https://www.figma.com/file/waZrg7WMdKmAEmQr7T4kZu/HEALCLIN?node-id=0%3A1&t=a6yylwm1bwrXdWC6-1',
      title: "HEALCLIN",
      year: "September 2022",
      description: "UI/UX Design | Health App",
      imgUrl: healclin,
    }
  ];

  const desktops = [
    {
      link: 'https://github.com/wildanlh/TokoSaham',
      title: "Toko Saham",
      year: "May 2021",
      description: "Application Development | Stock App",
      imgUrl: tokosaham,
    }
  ];



  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Academic Projects</h2>
                  <p>Some project i have made when i'm in academic</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Website</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mobile</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Desktop</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            websites.map((website, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...website}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            mobiles.map((mobile, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...mobile}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            desktops.map((desktop, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...desktop}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
