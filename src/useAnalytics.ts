import React from 'react'
import { useLocation } from 'react-router-dom'

import * as analytics from './ga4'

export function useAnalytics() {

  React.useEffect(() => {
    analytics.init()
  }, [])

  React.useEffect(() => {
    const path = location.href
    console.log(path);
    analytics.sendPageview(path)
  }, [location])
}

export default useAnalytics