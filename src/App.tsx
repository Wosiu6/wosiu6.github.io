import React from 'react';
import useAnalytics from './useAnalytics';
import HeaderComponent from './components/headerComponent/HeaderComponent';
import FooterComponent from './components/footerComponent/FooterComponent';
import IntroComponent from './components/introComponent/IntroComponent';
import HomepageComponent from './components/homepageComponent/HomepageComponent';
import AboutMeComponent from './components/aboutMeComponent/AboutMeComponent';
import AboutSiteComponent from './components/aboutSiteComponent/AboutSiteComponent';
import NotFoundComponent from './components/notFoundComponent/NotFoundComponent';
import CVDisplayComponent from './components/cvDisplayComponent/CVDisplayComponent';
import MiscListComponent from './components/miscListComponent/MistListComponent';
import PorfolioListComponent from './components/portfolioListComponent/PortfolioListComponent';
import ScreenLockProjectComponent from './components/projectsComponents/ScreenLockProjectComponent';
import HTLBProjectComponent from './components/projectsComponents/HTLBProjectComponent';
import RazorBallsProjectComponent from './components/projectsComponents/RazorBallsProjectComponent';

interface AppLayoutProps {
  children: React.ReactNode;
  isHeaderShort?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, isHeaderShort = false }) => (
  <div className="App">
    <HeaderComponent isShort={isHeaderShort} />
    {children}
    <FooterComponent />
  </div>
);

export function NavigateHomepage() {
  useAnalytics();
  return <AppLayout><IntroComponent /><HomepageComponent /></AppLayout>;
}

export function NavigateAboutMe() {
  return <AppLayout><AboutMeComponent /></AppLayout>;
}


export function NavigateAboutSite() {
  return <AppLayout><AboutSiteComponent /></AppLayout>;
}

export function NavigateNotFound() {
  return <AppLayout><NotFoundComponent /></AppLayout>;
}

export function NavigateCVDisplay() {
  return <AppLayout isHeaderShort={true}><CVDisplayComponent /></AppLayout>;
}

export function NavigateMiscList() {
  return <AppLayout><MiscListComponent /></AppLayout>;
}

export function NavigatePortfolioList() {
  return <AppLayout><PorfolioListComponent /></AppLayout>;
}

export function NavigateScreenLockProject() {
  return <AppLayout><ScreenLockProjectComponent /></AppLayout>;
}

export function NavigateHLTBProject() {
  return <AppLayout><HTLBProjectComponent /></AppLayout>;
}

export function NavigateRazorBallsProject() {
  return <AppLayout><RazorBallsProjectComponent /></AppLayout>;
}

export default NavigateHomepage;