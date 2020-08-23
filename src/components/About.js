import React, { Component } from 'react'
import { Jumbotron, Row, Col, Image, Container, Button } from "react-bootstrap"
import styles from "../css/About.module.css"
import profile from "../assets/profile.PNG"

class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <Jumbotron id = "about" className = {styles.about} style = {{margin: "0px"}}>
        <Container>
         <Row>
            <Col md lg = {4}>
              <Image
                className = {styles.profilePic} 
                src = {profile} 
                alt = "" 
              />
            </Col>
            <Col md>
              <h2> About Me </h2>
              <p> {resumeData.aboutme} </p>
              <Row>
                <Col className = {styles.education}>
                  <h2> Education </h2>
                  {
                    resumeData.education && resumeData.education.map((item)=>{
                      return(
                        <Row>
                          <Col className = {styles.eduDetails}>
                            <h3> {item.UniversityName} </h3>
                            <p className = {styles.info}>
                            {item.specialization}
                            <span>&bull;</span> <em className = {styles.date}>{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                            <p>
                            {item.Achievements}
                            </p>
                          </Col>
                        </Row>
                      )
                    })
                  }
                </Col>
               </Row>
            </Col>
         </Row>
         <Row>
           <Col md lg = {4}></Col>
           <Col md>
            <a href = "https://drive.google.com/file/d/1CBWSprDz5ovdlEy0pSSpn3qd_vKEVzfG/view?usp=drivesdk" download>
                <Button variant = "success">
                  Download Resume
                </Button>
              </a>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default About;
