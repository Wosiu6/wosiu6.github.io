import React from 'react'
import { useLocation } from 'react-router-dom'

import * as analytics from './ga4'

export function useAnalytics() {
  const location = useLocation()

  React.useEffect(() => {
    analytics.init()
  }, [])

  React.useEffect(() => {
    const path = location.pathname + location.search
    const hardcodedPath = "https://wosiu6.github.io/"
    analytics.sendPageview(path ?? hardcodedPath)
  }, [location])
}

export default useAnalytics