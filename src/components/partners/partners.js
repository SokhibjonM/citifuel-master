import React from 'react'
import {Container, Row, Col,} from 'react-bootstrap'
import logo from '../../images/icons/1.png'
import logo2 from '../../images/icons/2.png'
import logo3 from '../../images/icons/3.png'
import logo4 from '../../images/icons/4.png'
import logo5 from '../../images/icons/5.png'
import logo6 from '../../images/icons/6.png'
import '../../bootstrap-grid.css'
import './partners.css'

const partners = () => {
    return (
        <>
          <Container>
              <h1>Partners</h1>
              <div className='row align-items-center'>
                  <div className="col-lg-2 col-4">
                      <img className="photo-resp" src={logo}></img>
                  </div>
                  <div className="col-lg-2 col-4">
                      <img className="photo-resp" src={logo2}></img>
                  </div>
                  <div className="col-lg-2 col-4">
                      <img className="photo-resp partners-img" src={logo3}></img>
                  </div>
                  <div className="col-lg-2 col-4">
                      <img className="photo-resp" src={logo4}></img>
                  </div>
                  <div className="col-lg-2 col-4">
                      <img className="photo-resp" src={logo5}></img>
                  </div>
                  <div className="col-lg-2 col-4">
                      <img className="photo-resp" src={logo6}></img>
                  </div>
                  
              </div>
              {/* <Row className='align-items-center px-2 py-5 text-center'>
                  <Col lg={2} md={4} sm={4}>
                      <img src={logo}></img>
                  </Col>
                  <Col lg={2} md={4} sm={4} >
                      <img src={logo2}></img>
                  </Col>
                  <Col lg={2} md={4} sm={4} >
                      <img src={logo3}></img>
                  </Col>
                  <Col lg={2} md={4} sm={4} >
                      <img src={logo4}></img>
                  </Col>
                  <Col lg={2} md={4} sm={4} >
                      <img src={logo5}></img>
                  </Col>    
                  <Col lg={2} md={4} sm={4} >
                      <img src={logo6}></img>
                  </Col> 
              </Row> */}
          </Container>
        </>
    )
}

export default partners
