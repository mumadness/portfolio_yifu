import React from 'react'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import '../css/App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
