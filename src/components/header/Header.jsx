import { Container, Row, Col } from 'react-bootstrap';

import mockup from "../../images/image-mockups.png"

import "./header.scss"

function Header() {
  return (
    <Container className="headerContainer">
      <Row className="justify-content-between align-items-center">
        <Col xs={12} sm={12} md={5} lg={5} className="order-1 order-md-0 mt-5 mt-md-0">
            <div>
                <h1>Next generation digital banking</h1>
                <p className="mt-4 mb-4">Take your financial life online. Your Easybank account
                  will be a one-stop-shop for spending, saving, budgeting,
                  investing, and much more.
                </p>
                <button className="button px-4 py-2">Request Invite</button>
            </div>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5} className="text-end mockup">
          <img src={mockup} alt="mockup" />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;