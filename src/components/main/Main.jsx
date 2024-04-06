import { Container, Row, Col } from 'react-bootstrap';

import simpleBudgeting from "../../images/icon-budgeting.svg"
import openAPI from "../../images/icon-api.svg"
import onBoarding from "../../images/icon-onboarding.svg"
import onlineBanking from "../../images/icon-online.svg"

import "./main.scss"

function Main() {
  return (
    <Container className="mainContainer">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="text-center text-md-start">
            <div className="whyEasyBank">
                <h1>Why choose Easybank?</h1>
                <p className="mt-4">We leverage Open Banking to turn your bank account into your
                    financial hub. Control your finances like never before
                </p>
            </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={3} className="mt-3 mt-md-5 text-center text-xl-start column">
            <div>
                <img src={onlineBanking} alt="icon" className="mb-2"/>
                <h5 className="mt-4">Online Banking</h5>
                <p className="mt-4">We leverage Open Banking to turn your bank account into your
                    financial hub. Control your finances like never before
                </p>
            </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={3} className="mt-3 mt-md-5 text-center text-xl-start column">
            <div>
                <img src={simpleBudgeting} alt="icon" className="mb-2" />
                <h5 className="mt-4">Simple Budgeting</h5>
                <p className="mt-4">We leverage Open Banking to turn your bank account into your
                    financial hub. Control your finances like never before
                </p>
            </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={3} className="mt-3 mt-md-5 text-center text-xl-start column">
            <div>
                <img src={onBoarding} alt="icon" className="mb-2" />
                <h5 className="mt-4">Fast Onboarding</h5>
                <p className="mt-4">We leverage Open Banking to turn your bank account into your
                    financial hub. Control your finances like never before
                </p>
            </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={3} className="mt-3 mt-md-5 text-center text-xl-start column">
            <div>
                <img src={openAPI} alt="icon" className="mb-2" />
                <h5 className="mt-4">Open API</h5>
                <p className="mt-4">We leverage Open Banking to turn your bank account into your
                    financial hub. Control your finances like never before
                </p>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;