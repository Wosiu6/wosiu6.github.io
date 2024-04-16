import * as React from 'react'
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { render } from 'react-dom';
import {Home, About, Misc, CV, AboutSite, NotFoundPage, Projects, ScreenLock, HLTB, Balls} from './App';
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
            <Route path='/Misc/AboutSite' element={<AboutSite/>} />
            <Route path='/CV' element={<CV/>} />
            <Route path='/ProjectList' element={<Projects/>} />
            <Route path='/ProjectList/ScreenLockProject' element={<ScreenLock/>} />
            <Route path='/ProjectList/HLTBProject' element={<HLTB/>} />
            <Route path='/ProjectList/RazorBallsProject' element={<Balls/>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
