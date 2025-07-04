import * as React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import { NavigateHomepage, NavigateAboutMe, NavigateMiscList, NavigateCVDisplay, NavigateAboutSite, NavigateNotFound, NavigatePortfolioList, NavigateScreenLockProject, NavigateHLTBProject, NavigateRazorBallsProject, NavigatePythonScriptsProject, NavigatePythonExtractPhotos, NavigateTakeoutMerger } from './App';
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
            <Route path={Paths.TAKEOUT_MERGER} element={<NavigateTakeoutMerger/>} />
            <Route path={Paths.PYTHON_SCRIPTS_PROJECT} element={<NavigatePythonScriptsProject/>} />
            <Route path={Paths.PYTHON_EXTRACT_PHOTOS} element={<NavigatePythonExtractPhotos/>} />
            <Route path="*" element={<NavigateNotFound />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);