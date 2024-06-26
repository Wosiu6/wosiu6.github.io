import ga4 from 'react-ga4'

const TRACKING_ID = 'G-LEDJEQBVDX'

export const init = () => ga4.initialize(TRACKING_ID)

export const sendEvent = (name: string) => ga4.event('screen_view', {
  app_name: "Disco",
  screen_name: name,
})

export const sendPageview = (path: string) => ga4.send({
  hitType: 'pageview',
  page: path,
  page_location: window.location.href,
});