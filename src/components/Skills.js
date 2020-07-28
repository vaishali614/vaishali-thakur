import React, { Component } from "react"
import styles from "../css/Skills.module.css"
import { Jumbotron, Container, Row, Col } from "react-bootstrap"

class Skills extends Component {
  render(){
    return(
      <Jumbotron id = "skills" style = {{margin: "0px"}}>
        <Container>
          <Row>
            <Col md lg = {4} className = {styles.work}>
               <h1><span>Skills</span></h1>
            </Col>
            <Col md>
              <div className = {styles.bars}>
                <ul className = {styles.skills}>
                  <li>
                    <span className = {styles.barExpand} style = {{paddingRight: "95%"}}> </span>
                    <em> C++ </em>
                  </li>
                  <li>
                    <span className = {styles.barExpand} style = {{paddingRight: "90%"}}> </span>
                    <em> HTML5 </em>
                  </li>
                  <li>
                    <span className = {styles.barExpand} style = {{paddingRight: "85%"}}> </span>
                    <em> CSS3 </em>
                  </li>
                  <li>
                    <span className = {styles.barExpand} style = {{paddingRight: "80%"}}> </span>
                    <em> BOOTSTRAP </em>
                  </li>
                  <li>
                    <span className = {styles.barExpand} style = {{paddingRight: "75%"}}> </span>
                    <em> JAVASCRIPT </em>
                  </li>
                  <li>
                    <span className = {styles.barExpand} style = {{paddingRight: "73%"}}> </span>
                    <em> REACTJS </em>
                  </li>
                  <li>
                    <span className = {styles.barExpand} style = {{paddingRight: "80%"}}> </span>
                    <em> ADOBE PHOTOSHOP </em>
                  </li>
                  <li>
                    <span className = {styles.barExpand} style = {{paddingRight: "75%"}}> </span>
                    <em> ADOBE XD </em>
                  </li>
                  <li>
                    <span className = {styles.barExpand} style = {{paddingRight: "40%"}}> </span>
                    <em> PYTHON </em>
                  </li>
                  <li>
                    <span className = {styles.barExpand} style = {{paddingRight: "50%"}}> </span>
                    <em> MYSQL </em>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    )
  } 
}

export default Skills;