const demoAuthKey = 'relay-bee-example:demo-auth'

export const isDemoAuthenticated = () => localStorage.getItem(demoAuthKey) === '1'

export const setDemoAuthenticated = () => {
  localStorage.setItem(demoAuthKey, '1')
}

export const clearDemoAuthenticated = () => {
  localStorage.removeItem(demoAuthKey)
}
