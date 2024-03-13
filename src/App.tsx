import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import List from './components/list/List'
import Intro from './components/intro/Intro'
import MiscList from './components/miscList/MiscList'
import AboutText from './components/aboutText/AboutText'
import CVDocument from './components/cv/CV'

export function Home() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <List/>
      <Footer/>
    </div>
  );
}

export function About(){
  return (
    <div className="App">
      <Header/>
      <AboutText />
      <Footer/>
    </div>
  ); 
}

export function CV(){
  return (
    <div className="App">
      <CVDocument />
      <Footer/>
    </div>
  ); 
}

export function Misc(){
  return (
    <div className="App">
      <Header/>
      <MiscList />
      <Footer/>
    </div>
  ); 
}

export default Home;

