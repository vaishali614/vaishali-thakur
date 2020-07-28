import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import { IoIosArrowDropupCircle } from 'react-icons/io'
import styles from "../css/Footer.module.css"

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div className = {styles.footer} id = "footer">
        <Row>
          <Col>
            <div id = {styles.goTop}>
              <a title = "Back to Top" href = "#intro">
                <IoIosArrowDropupCircle 
                  className = {styles.icon}
                />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className = {styles.socialLinks}>
              {
                resumeData.socialLinks && resumeData.socialLinks.map((item) => {
                  return(
                    <li>
                      <a href = {item.url}>
                        {item.component}
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}