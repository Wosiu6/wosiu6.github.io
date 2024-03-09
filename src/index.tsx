import * as React from 'react'
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { render } from 'react-dom';
import {Home, About, Misc} from './App';
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
          </Routes>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
