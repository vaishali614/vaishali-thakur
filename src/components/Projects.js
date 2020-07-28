import React, { Component } from 'react';
import { Jumbotron, Container, Row, Card } from 'react-bootstrap';
import styles from "../css/Projects.module.css"

class Projects extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <Jumbotron id = "projects" style = {{margin: "0px"}}>
        <Container>
          <h1> <span> Check Out Some of My Works </span> </h1>
          <Row className = {styles.row}>
              {
                resumeData.portfolio && resumeData.portfolio.map((item)=>{
                  return(
                    <Card 
                      style={{ width: '35rem'}} 
                      className = {styles.card}
                      border = "secondary"
                    >
                      <a href = {item.projectLink}>
                        <Card.Img 
                          variant = "top"
                          src = {require("../assets/" + item.imgurl)}
                          className = {styles.image}
                          alt = ""
                        />
                      </a>
                      <Card.Body>
                        <a href = {item.projectLink} style = {{textDecoration: "none"}}>
                          <Card.Title className = {styles.title}>
                            {item.name}
                          </Card.Title>
                        </a>
                          <Card.Text className = {styles.text}>
                            {item.description}
                          </Card.Text>
                      </Card.Body>
                    </Card>
                  )
                })
              }
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Projects;