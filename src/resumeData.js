import React from "react"
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'

let resumeData = {
    "imagebaseurl":"https://vaishali614.github.io/",
    "name": "Vaishali Thakur",
    "subheading": "Co - Founder at Girl Code It (GCI)",
    "role": "Competitive Coder and Frontend Web Developer",
    "linkedinId":"https://www.linkedin.com/in/vaishali614/",
    "twitter": "http://twitter.com/vaishali6111",
    "roleDescription": "Girl Code It aka GCI is a group of people who firmly believe that \"Knowledge grows when shared\" and is eager to build a healthy coding culture among young coders. Being an avid coder, I want to contribute my best to the society!",
    "socialLinks":[
      {
        "name":"linkedin",
        "url":"https://www.linkedin.com/in/vaishali614/",
        "className":"fa fa-linkedin",
        "component":<FaLinkedinIn/>
      },
      {
        "name":"github",
        "url":"http://github.com/vaishali614",
        "className":"fa fa-github",
        "component":<FaGithub/>
      },
      {
        "name":"twitter",
        "url":"http://twitter.com/vaishali6111",
        "className":"fa fa-twitter",
        "component":<FaTwitter/>
      }
    ],
    "aboutme":"I am currently a final year student at Maharaja Agrasen Institute of Technology and pursuing my B.Tech in Computer Science and Engineering. I am a self taught Frontend Web Developer. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.",
    "address":"India",
    "website":"https://vaishali614.github.io",
    "education":[
      {
        "UniversityName":"Maharaja Agrasen Insitute of Technology",
        "specialization":"Computer Science and Engineering",
        "MonthOfPassing":"Aug",
        "YearOfPassing":"2021",
        "Achievements":"Co-Founder Girl Code It"
      },
      {
        "UniversityName":"Kendriya Vidyalaya",
        "specialization":"Physics, Chemistry, Mathematics",
        "MonthOfPassing":"March",
        "YearOfPassing":"2016",
        "Achievements":"Rank 3 in 12th Boards in School"
      },
      {
        "UniversityName":"Kendriya Vidyalaya",
        "specialization":"Science and Mathematics",
        "MonthOfPassing":"March",
        "YearOfPassing":"2014",
        "Achievements":"Secured 10 CGPA"
      }
    ],
    "work":[
      {
        "CompanyName":"Coding Ninjas",
        "specialization":"Data Structures and Algorithms",
        "MonthOfLeaving":"April",
        "YearOfLeaving":"2020",
        "Achievements":"Mentored over 50+ students in Inception - for Data Structures and Algorithms course in both offline and online mode."
      },
      {
        "CompanyName":"cppsecrets.com",
        "specialization":"Software Developer Intern",
        "MonthOfLeaving":"August",
        "YearOfLeaving":"2019",
        "Achievements":"Re-designed and developed a dynamic and interactive web portal that provides a platform for developers to showcase their skills by publishing articles on C++, Python and many more."
      },
      {
        "CompanyName":"The Sparks Foundation",
        "specialization":"Intern - Graduate Rotational Internship Program",
        "MonthOfLeaving":"July",
        "YearOfLeaving":"2019",
        "Achievements":"RestAPI showing all CRUD (Create, Read, Update and Delete) operations."
      }
    ],
    "skillsDescription":"Coding enthusiast and a ReactJS developer",
    "skills":[
      {
        "skillname":"C++",
      },
      {
        "skillname":"HTML5"
      },
      {
        "skillname":"CSS"
      },
      {
        "skillname":"Bootstrap"
      },
      {
        "skillname":"Javascript"
      },
      {
        "skillname":"Reactjs"
      },
      {
        "skillname":"Adobe Photoshop"
      },
      {
        "skillname":"Adobe XD"
      },
      {
        "skillname":"Python"
      },
      {
        "skillname":"MySQL"
      }
    ],
    "portfolio":[
      {
        "name":"JobHunt",
        "description":"Its a web application for job seekers and employers to search and view latest job opportunities at different locations using GitHub Jobs API.",
        "imgurl":"JobHunt.PNG",
        "projectLink":"https://github.com/vaishali614/JobHunt"
      },
      {
        "name":"Girl Code It Website",
        "description":"The main website of Girl Code It which will serve as an entry point to anyone interested in joining us or just exploring what we do!",
        "imgurl":"GCI.png",
        "projectLink":"https://github.com/Girl-Code-It/Girl-Code-It-Website"
      },
      {
        "name":"HitATune",
        "description":"Its a clone of Patatap website which is a portable animation and sound kit. Press any alphabet and enjoy the music. Its built with HTML5, CSS3, Paper.js and Howler.js.",
        "imgurl":"HitATune.png",
        "projectLink":"https://github.com/vaishali614/HitATune"
      },
      {
        "name":"RGB Color Guessing Game",
        "description":"The RGB Color Guessing Game is a game in which user has to choose the correct color corresponding to the random RGB code. Front end technologies used are HTML5, CSS3 and JavaScript.",  
        "imgurl":"RGB.PNG",
        "projectLink":"https://github.com/vaishali614/RGB-Colour-Guessing-Game"
      },
      {
        "name":"Sudoku",
        "description":"Sudoku Solver - This is a backtracking algorithm. The basic idea being that you incrementally build a solution and discard it once you realize that it’s not viable.",
        "imgurl":"Sudoku.PNG",
        "projectLink":"https://github.com/vaishali614/Sudoku"
      }
    ]
  }
  
  export default resumeData
