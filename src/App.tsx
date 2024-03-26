import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import List from './components/list/List'
import Intro from './components/intro/Intro'
import MiscList from './components/miscList/MiscList'
import AboutText from './components/aboutText/AboutText'
import CVDocument from './components/cv/CV'
import GA4React from "ga-4-react";

const ga4react = new GA4React(
  'G-LEDJEQBVDX',
  { /* ga custom config, optional */ },
  [ /* additional code, optional */],
  5000 /* timeout, optional, defaults is 5000 */
);

ga4react.initialize().then((ga4) => {
  ga4.pageview(window.location.pathname + window.location.search);
  window.gtag("config", 'G-LEDJEQBVDX', {
    page_location: 'https://wosiu6.github.io/',
  });
})

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

