import React, { Component } from "react";
import { Jumbotron, Row, Col } from 'react-bootstrap'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import styles from "../css/Intro.module.css"

class Intro extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <Jumbotron id = "intro" className = {styles.intro} style = {{margin: "0px"}}>
        <div className = {styles.banner}>
            <div className = {styles.bannerText}>
              <h1 className = "responsive-headline"> I am {resumeData.name}. </h1>
              <h2> {resumeData.subheading} </h2>
              <h3 style = {{color:'#fff', fontFamily:'sans-serif '}}> I am a {resumeData.role}. {resumeData.roleDescription} </h3>
              <hr/>
              <ul className = {styles.social}>
                {
                  resumeData.socialLinks && resumeData.socialLinks.map(item => {
                    return(
                        <li key = {item.name}>
                          <a href = {item.url}>
                            {item.component}
                          </a>
                        </li>
                      )
                    }
                  )
                }
              </ul>
            </div>
        </div>

        <Row>
          <Col>
            <div id = {styles.goTop}>
              <a title = "Back to Top" href = "#footer">
                <IoIosArrowDropdownCircle 
                  className = {styles.icon}
                />
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default Intro;