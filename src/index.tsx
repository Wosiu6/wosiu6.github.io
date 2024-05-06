import * as React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { render } from 'react-dom';
import {NavigateHomepage, NavigateAboutMe, NavigateMiscList, NavigateCVDisplay, NavigateAboutSite, NavigateNotFound, NavigatePortfolioList, NavigateScreenLockProject, NavigateHLTBProject, NavigateRazorBallsProject, NavigateCleanAPIGamesProject} from './App';
import './index.css';
import { Paths } from './Paths';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path={Paths.HOMEPAGE} element={<NavigateHomepage/>} />
            <Route path={Paths.ABOUT_ME} element={<NavigateAboutMe/>} />
            <Route path={Paths.MISC_LIST} element={<NavigateMiscList/>} />
            <Route path={Paths.ABOUT_SITE} element={<NavigateAboutSite/>} />
            <Route path={Paths.CV_DISPLAY} element={<NavigateCVDisplay/>} />
            <Route path={Paths.PORTFOLIO_LIST} element={<NavigatePortfolioList/>} />
            <Route path={Paths.SCREEN_LOCK_PROJECT} element={<NavigateScreenLockProject/>} />
            <Route path={Paths.HLTB_PROJECT} element={<NavigateHLTBProject/>} />
            <Route path={Paths.RAZOR_BALLS_PROJECT} element={<NavigateRazorBallsProject/>} />
            <Route path={Paths.CLEANAPI_GAMES_PROJECT} element={<NavigateCleanAPIGamesProject/>} />
            <Route path="*" element={<NavigateNotFound />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
