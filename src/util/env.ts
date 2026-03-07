export const isDemoMode =
  String(import.meta.env.VITE_DEMO_MODE ?? 'false').toLowerCase() === 'true'

const demoAuthKey = 'relay-bee-example:demo-auth'

export const isDemoAuthenticated = () => localStorage.getItem(demoAuthKey) === '1'

export const setDemoAuthenticated = (value: boolean) => {
  if (value) {
    localStorage.setItem(demoAuthKey, '1')
    return
  }
  localStorage.removeItem(demoAuthKey)
}
