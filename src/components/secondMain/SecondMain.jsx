import { Col, Container, Row } from 'react-bootstrap'

import currency from "../../images/image-currency.jpg"
import restaurant from "../../images/image-restaurant.jpg"
import plane from "../../images/image-plane.jpg"
import confetti from "../../images/image-confetti.jpg"

import "./secondMain.scss"

function secondMain() {
  return (
    <Container className="secondMainContainer">
        <Row>
            <Col xs={12} sm={12} md={12} lg={12} className="">
                <div className="text-center text-md-start">
                    <h1>Latest Articles</h1>
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={3} className="mt-3 mt-md-5 mb-4 mb-lg-0">
                <div className="column">
                    <img src={currency} alt="currency" className="mb-2 img-fluid"/>
                    <div className="px-3 pt-1 pb-2">
                        <p className="mt-2"><small>By Claire Robinson</small></p>
                        <h5 className="mt-2 hover">Recieve money in any currency with no fees</h5>
                        <p className="mt-3">
                            The world is getting smaller and we're becoming more mobile. So
                            why should you be forced to only receieve money in a single...
                        </p>    
                    </div>               
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={3} className="mt-3 mt-md-5 mb-4 mb-lg-0">
                <div className="column">
                    <img src={restaurant} alt="restaurant" className="mb-2 img-fluid"/>
                    <div className="px-3 pt-1 pb-2">
                        <p className="mt-2"><small>By Wilson hutton</small></p>
                        <h5 className="mt-2 hover">Treat yourself without worrying about money</h5>
                        <p className="mt-3">
                            Our simple budgeting feature allows you to seperate out your spending
                            and set realistic limits each month. That means you...
                        </p>    
                    </div>               
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={3} className="mt-3 mt-md-5 mb-4 mb-lg-0">
                <div className="column">
                    <img src={plane} alt="plane" className="mb-2 img-fluid"/>
                    <div className="px-3 pt-1 pb-2">
                        <p className="mt-2"><small>By Wilson Hutton</small></p>
                        <h5 className="mt-2 hover">Take your Easybank card wherever you go</h5>
                        <p className="mt-3">
                            We want you to enjoy your travels. This is why we don't charge any fees
                            on purchases while you're abroad. We'll even show you...
                        </p>    
                    </div>            
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={3} className="mt-3 mt-md-5 mb-4 mb-lg-0">
                <div className="column">
                    <img src={confetti} alt="coffetti" className="mb-2 img-fluid"/>
                    <div className="px-3 pt-1 pb-2">
                        <p className="mt-2"><small>By Claire Robinson</small></p>
                        <h5 className="mt-2 hover">Our invite-only Beta accounts are now live!</h5>
                        <p className="mt-3">
                            After a lot of hard work by the whole team, we're excited to launch
                            our closed beta. It's easy to request an invite through the site...
                        </p>    
                    </div>                 
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default secondMain
