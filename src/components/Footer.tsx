import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo-ysb.png";
import IconLink from "../assets/img/nav-icon1.svg";
import IconFace from "../assets/img/nav-icon2.svg";
import IconInst from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/">
                <img src={IconLink} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/">
                <img src={IconFace} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={IconInst} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
