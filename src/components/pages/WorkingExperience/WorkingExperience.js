import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import AnimatedTitle from '../../AnimatedTitle';
import { title1 } from './WorkData';


function WorkingExperience() {
    return (
        <>
          <div className="banner__home" style={{overflow:'hidden',position:'relative'}}>
        <Container>
          <Row>
            <Col lg={8} sm={8} xs={12} className="p-0 my-auto">
              <AnimatedTitle {...title1} />
            </Col>
          </Row>
        </Container>
      </div>
        </>
      );
}

export default WorkingExperience
