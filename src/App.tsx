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

export default Home;

