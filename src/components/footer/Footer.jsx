import { Col, Container, Row } from "react-bootstrap"

import logo from "../../images/logo.svg"

import "./footer.scss"

function Footer() {
  return (
    <Container className="footerContainer">
        <Row className="justify-content-between text-center text-md-start">
            <Col xs={12} sm={6} md={6} lg={3}>
                <div className="d-inline-block">
                    <img src={logo} alt="logo"/>
                    <span>easybank</span>
                </div>
                <div className="mt-4 mt-sm-5 mt-md-5 mb-4">
                    <button className="social">
                        <i className="fa-brands fa-facebook"></i>
                    </button>
                    <button className="social">
                        <i className="fa-brands fa-youtube"></i>
                    </button>
                    <button className="social">
                        <i className="fa-brands fa-twitter"></i>
                    </button>
                    <button className="social">
                        <i className="fa-brands fa-instagram"></i>
                    </button>
                    <button className="social">
                        <i className="fa-brands fa-pinterest"></i>
                    </button>
                </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} className="mb-4">
                <div className="mb-3">
                    <a href="#aboutUs">About Us</a>
                </div>
                <div className="mb-3">
                    <a href="#contact">Contact</a>
                </div>
                <div>
                    <a href="#blog">Blog</a>
                </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} className="mb-4 mt-sm-4 mt-md-4 mt-lg-0">
                <div className="mb-3">
                    <a href="#careers">Careers</a>
                </div>
                <div className="mb-3">
                    <a href="#support">Support</a>
                </div>
                <div className="mb-1">
                    <a href="#privacyPolicy">Privacy Policy</a>
                </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} className="text-lg-end mt-sm-4 mt-md-4 mt-lg-0">
                <button className="button px-4 py-2 mb-4 mt-sm-1 mt-md-1 mt-lg-0">Request Invite</button>
                <p className="copyright">&copy; Easybank. All Rights Reserved</p>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer
