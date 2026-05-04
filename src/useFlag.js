import { useDecision } from '@optimizely/react-sdk'

export function useFlag(flagKey, defaults = {}) {
  const [decision, clientReady] = useDecision(flagKey, { autoUpdate: true })
  const variables = decision?.variables ?? {}
  const merged = { ...defaults }
  for (const key of Object.keys(defaults)) {
    if (variables[key] !== undefined && variables[key] !== null) {
      merged[key] = variables[key]
    }
  }
  return {
    enabled: clientReady ? !!decision?.enabled : false,
    variables: merged,
    clientReady,
    variationKey: decision?.variationKey,
  }
}
