import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import imgAnimeFlix from "../assets/img/project-animeflixB.jpg";
import imgAnimeFlix1 from "../assets/img/project-animeflix500x320.jpg";
import imgModal from "../assets/img/project-modal.jpg";
import imgEcommerce from "../assets/img/project-ecommerceCard.jpg";
import imgEcommerce1 from "../assets/img/project-eCommerce500x320.jpg";
import projImg from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ProjectCard from "./projects/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "AnimeFlix",
      description: "Development",
      imgUrl: imgAnimeFlix1,
    },
    {
      title: "Modal",
      description: " Development",
      imgUrl: imgModal,
    },
    {
      title: "E-Commerce",
      description: " Development",
      imgUrl: imgEcommerce,
    },
    {
      title: "example",
      description: " Development",
      imgUrl: projImg,
    },
    {
      title: "E-Commerce",
      description: "Design & Development",
      imgUrl: imgEcommerce1,
    },
    {
      title: "AnimeFlix",
      description: " Development",
      imgUrl: imgAnimeFlix,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Projects description here</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="mainlyProjects">
                          Mainly Projects
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="studyProjects">
                          Study Projects
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="otherProjects">
                          Other Projects
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="mainlyProjects">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="studyProjects">
                        <p>
                          STUDY PROJECTS Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Cumque quam, quod neque provident
                          velit, rem explicabo excepturi id illo molestiae
                          blanditiis, eligendi dicta officiis asperiores
                          delectus quasi inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="otherProjects">
                        <p>Hola niña bella</p>
                        <button onClick={() => {}}>Click</button>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="fondo" />
    </section>
  );
};

export default Projects;
