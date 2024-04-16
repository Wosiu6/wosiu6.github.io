import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import List from './components/list/List'
import Intro from './components/intro/Intro'
import MiscList from './components/miscList/MiscList'
import AboutText from './components/aboutText/AboutText'
import CVDocument from './components/cv/CV'
import SiteDesciprtion from './components/aboutSite/AboutSite'
import NotFound from './components/notFound/NotFound'
import useAnalytics from './useAnalytics'
import ProjectList from './components/projects/ProjectList'
import ScreenLockProject from './components/projects/ScreenLockProject'
import HLTBProject from './components/projects/HTLBProject'
import RazorBallsProject from './components/projects/RazorBallsProject'


export function Home() {
  useAnalytics();
  return (
    <div className="App">
      <Header />
      <Intro />
      <List />
      <Footer />
    </div>
  );
}

export function About() {
  return (
    <div className="App">
      <Header />
      <AboutText />
      <Footer />
    </div>
  );
}

export function AboutSite() {
  return (
    <div className="App">
      <Header />
      <SiteDesciprtion />
      <Footer />
    </div>
  );
}

export function NotFoundPage() {
  return (
    <div className="App">
      <Header />
      <NotFound />
      <Footer />
    </div>
  );
}

export function CV() {
  return (
    <div className="App">
      <CVDocument />
      <Footer />
    </div>
  );
}

export function Misc() {
  return (
    <div className="App">
      <Header />
      <MiscList />
      <Footer />
    </div>
  );
}

export function Projects() {
  return (
    <div className="App">
      <Header />
      <ProjectList />
      <Footer />
    </div>
  );
}

export function ScreenLock() {
  return (
    <div className="App">
      <Header />
      <ScreenLockProject />
      <Footer />
    </div>
  );
}

export function HLTB() {
  return (
    <div className="App">
      <Header />
      <HLTBProject />
      <Footer />
    </div>
  );
}

export function Balls() {
  return (
    <div className="App">
      <Header />
      <RazorBallsProject />
      <Footer />
    </div>
  );
}

export default Home;

