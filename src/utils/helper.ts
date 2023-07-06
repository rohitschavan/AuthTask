import { Router } from '../routes'

export const getApp = () => {
  const subdomain = getSubdomain(window.location.hostname)

  if (subdomain) return { app: Router, domain: subdomain }

  return { app: Router, domain: 'admin' }
}

export const getSubdomain = (location: string) => {
  const locationParts = location.split('.')
  let sliceTill = -2
  const isLocalHost = (locationParts.slice(-1)[0] = 'localhost')
  if (isLocalHost) sliceTill = -1
  return locationParts.slice(0, sliceTill).join('')
}
