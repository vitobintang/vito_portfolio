import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="experiences">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experiences</h2>
                <p></p>
                <Tab.Container id="experiences-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">2021</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2022</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">2023</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <h3>"Mahasiswa Berprestasi Wonogiri" Scholarship</h3>
                      <h4>(2021-2023)</h4>
                      <p>The "Mahasiswa Berprestasi Wonogiri" Program is tuition assistance provided by the Wonogiri Regency Government for selected students who live in Wonogiri Regency.</p>
                      <h3>Communication Commission Staff at Persekutuan Mahasiswa Kristen Teknik UGM</h3>
                      <h4>(2021-2022)</h4>
                      <p>Communication division in charge of organizing the organization's social media posts and designing the posts.</p>
                      <h3>Chrismas Event Leader at Engineering Faculty Gadjah Mada University</h3>
                      <h4>(2021)</h4>
                      <p>Coordinating the Christmas 2021 committee at the Faculty of Engineering, Gadjah Mada University</p>
                      
                      {/* <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h3>3rd Place At Teknofest Turksat Model Satellite Competition Turkey 2022</h3>
                      <h4>(2022)</h4>
                      <p>Issued by Issued by Turkish Technology Team (T3 Foundation) and the Ministry of Industry and Technology of the Republic of Turkey and TÜRKSAT.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h3>Research Intern at National Research and Innovation Agency Republic of Indonesia</h3>
                      <h4>(2023)</h4>
                      <p>Designing Prototype of Human Machine Interface Testing for Small Modular Reactor's Main Control Room.</p>
                      <h3>Computer Laboratory Assistant at Computer Laboratory Department of Nuclear Engineering and Enginerring Physics UGM</h3>
                      <h4>(2023)</h4>
                      <p>Teaching Assistant in Computer Library at Department of Nuclear Engineering and Enginerring Physics UGM, teaching Python.</p>
                      <h3>Finalist At Teknofest Turksat Model Satellite Competition Turkey 2023</h3>
                      <h4>(2023)</h4>
                      <p>Issued by Issued by Turkish Technology Team (T3 Foundation) and the Ministry of Industry and Technology of the Republic of Turkey and TÜRKSAT.</p>
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
