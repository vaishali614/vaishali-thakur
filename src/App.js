import React, {Component} from 'react'
import Header from "./components/Header"
import Intro from "./components/Intro"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from './components/Footer';
import resumeData from './resumeData';

class App extends Component{
  render(){
    return (
      <div className = "App">
        <Header resumeData={resumeData} />
        <Intro resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Experience resumeData={resumeData} />
        <Skills resumeData={resumeData} />
        <Projects resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
