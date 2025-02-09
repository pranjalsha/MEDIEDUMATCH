import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../css/services.css";

const servicesData = [
  {
    id: 1,
    icon: "fas fa-calculator",
    title: "College Predictor",
    link: "/collegepredictor",
    description:
      "Unlock Your Academic Destiny: Navigate the maze of college admissions with ease. Our College Predictor tool empowers you to uncover the ideal higher education institutions based on your unique strengths, interests, and ambitions. Say hello to your future alma mater!",
  },
  {
    id: 2,
    icon: "fas fa-trophy",
    title: "Rank Predictor",
    link: "/rankpredictor",
    description:
      "Forecast Your Future: Step into the future with our Rank Predictor tool. Get insights into potential academic rankings based on your performance, allowing you to set realistic goals and chart your path to success with confidence.",
  },
 
  {
    id: 3,
    icon: "fas fa-comments",
    title: "Student Support",
    link: "/contact",
    description:
      "Empowering Students Every Step of the Way: Discover a World of Student Support. From academic assistance to mental health resources, explore a comprehensive array of services designed to ensure your success. Whether it's tutoring, counseling, or career guidance, find the support you need to thrive on your educational journey.",
  },
];

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2 style={{color: "#f64b4b"}}>Our services</h2>
          <div className="subtitle" style={{color: "rgba(210, 0, 0, 0.6)"}}>services we provide</div>
        </div>
        <Row>
          {servicesData.map((services) => {
            return (
             
              <Col sm={4} className="holder" key={services.id}>
                <Link to={services.link} className="service-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;
