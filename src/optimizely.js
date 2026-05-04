import { createInstance } from '@optimizely/react-sdk'

const sdkKey = import.meta.env.VITE_OPTIMIZELY_SDK_KEY

export const optimizely = createInstance({
  sdkKey: sdkKey || 'placeholder-no-sdk-key-set',
  datafileOptions: {
    autoUpdate: true,
    updateInterval: 1_000,
  },
})

function getOrCreateAnonId() {
  if (typeof window === 'undefined') return 'ssr-user'
  const existing = window.localStorage.getItem('omr_user_id')
  if (existing) return existing
  const fresh = `omr-${Math.random().toString(36).slice(2)}-${Date.now()}`
  window.localStorage.setItem('omr_user_id', fresh)
  return fresh
}

export const optimizelyUser = {
  id: getOrCreateAnonId(),
  attributes: {
    ticket_type: 'festival',
    pass_tier: 'standard',
    industry: 'marketing',
    is_returning_attendee: false,
    company_size: 'mid_market',
    country: 'DE',
  },
}
