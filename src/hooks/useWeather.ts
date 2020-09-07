import { useCallback, useEffect, useState } from 'react'
import { useRequestHandler } from './useRequestHandler'
import { useQuery } from 'react-query'

export const useWeather = () => {
  const [isGeoLocationAvailable, setIsGeoLocationAvailable] = useState(false)
  const [isGeoLocationPrompt, setIsGeoLocationPrompt] = useState(true)
  const [geoLocation, setGeoLocation] = useState({
    latitude: '0',
    longitude: '0',
  })

  const requestHandler = useRequestHandler()

  useEffect(() => {
    if ('geolocation' in navigator) {
      setIsGeoLocationAvailable(true)
    } else {
      alert('Your browser cannot detect Geo Location, use text raw')
    }
  }, [])

  useEffect(() => {
    if (!isGeoLocationAvailable) {
      return
    }
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setGeoLocation({
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString(),
        })
      },
      function (error) {
        setIsGeoLocationPrompt(false)
        console.error('Error Code = ' + error.code + ' - ' + error.message)
      },
    )
  }, [isGeoLocationAvailable])

  const fetchData = useCallback(async () => {
    const { data } = await requestHandler.get(
      `/onecall?lat=${geoLocation.latitude}&lon=${geoLocation.longitude}&exclude=minutely,hourly&appid=${process.env.REACT_APP_OPEN_WEATHER_MAPAPI_KEY}`,
    )
    return data
  }, [requestHandler, geoLocation])

  const weather = useQuery('repoData', fetchData)

  return { ...weather, isGeoLocationPrompt }
}
