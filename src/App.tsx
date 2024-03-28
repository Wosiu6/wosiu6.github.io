import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import List from './components/list/List'
import Intro from './components/intro/Intro'
import MiscList from './components/miscList/MiscList'
import AboutText from './components/aboutText/AboutText'
import CVDocument from './components/cv/CV'
import GA4React from "ga-4-react";
import SiteDesciprtion from './components/aboutSite/AboutSite'
import NotFound from './components/notFound/NotFound'

const ga4react = new GA4React(
  'G-LEDJEQBVDX',
  { /* ga custom config, optional */ },
  [ /* additional code, optional */],
  5000 /* timeout, optional, defaults is 5000 */
);

ga4react.initialize();

export function Home() {
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

