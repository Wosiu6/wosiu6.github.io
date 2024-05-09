import React from 'react'

import * as analytics from './ga4'

export function useAnalytics() {
  React.useEffect(() => {
    analytics.init()
  }, [])

  React.useEffect(() => {
    const path = window.location.href;
    analytics.sendPageview(path);
  }, [window.location.href])
}

export default useAnalytics