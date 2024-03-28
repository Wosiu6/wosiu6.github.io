import * as React from 'react'
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { render } from 'react-dom';
import {Home, About, Misc, CV, AboutSite, NotFoundPage} from './App';
import './index.css';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Misc' element={<Misc/>} />
            <Route path='/CV' element={<CV/>} />
            <Route path='/Misc/AboutSite' element={<AboutSite/>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
