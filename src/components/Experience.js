import React, { Component } from "react";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import styles from "../css/Experience.module.css"

class Experience extends Component {
  render(){
    let resumeData = this.props.resumeData;
    return(
      <Jumbotron id = "experience" className = {styles.experience} style = {{margin: "0px"}}>
        <Container>
          <Row>
            <Col md lg = {4} className = {styles.work}>
              <h1> <span> Experience </span> </h1>
            </Col>
            <Col md>
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <Row>
                      <Col>
                        <h3> {item.CompanyName} </h3>
                        <p className = {styles.info} style = {{fontSize: "20px"}}>
                          {item.specialization}
                          <span>&bull;</span> <em className = {styles.date}> {item.MonthOfLeaving} {item.YearOfLeaving} </em></p>
                        <p style = {{fontSize: "17px"}}>
                          {item.Achievements}
                        </p>
                      </Col>
                    </Row>
                  )
                })
              }
            </Col> 
          </Row>
        </Container>
      </Jumbotron>
    )
  }
}

export default Experience;