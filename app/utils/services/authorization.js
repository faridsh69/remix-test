const getToken = () => {
  const user = localStorage.getItem('user')
  if (user) {
    const { access_token: accessToken } = JSON.parse(user || {})
    if (accessToken) {
      return accessToken
    }
  }
  return null
}

const getCommonHeaders = async config => {
  config.headers.Accept = 'application/json'
  return config
}

export const unauthorizedInterceptor = async error => {
  if (error.response && error.response.status === 401) {
    localStorage.setItem('user', JSON.stringify({}))
    window.location.href = '/login'
    return Promise.reject(error)
  } else if (error.response && error.response.data) {
    return Promise.reject(error.response.data)
  }
  return Promise.reject(error.message)
}

export const tokenInterceptor = async config => {
  await getCommonHeaders(config)
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}
