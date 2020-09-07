import axios from 'axios'

export const useRequestHandler = (
  axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_OPEN_WEATHER_MAPAPI_KEY_API,
  }),
) => {
  axiosInstance.defaults.headers.common['Content-Type'] = 'application/json'

  return axiosInstance
}
