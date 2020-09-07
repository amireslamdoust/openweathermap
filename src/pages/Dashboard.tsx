import React from 'react'
import { format } from 'date-fns'
import { useWeather } from '../hooks/useWeather'

const Dashboard = () => {
  const {
    error: fetchError,
    isLoading: loading,
    data: weatherData,
    isGeoLocationPrompt,
  } = useWeather()

  if (fetchError) return <div>Error in Loading Data</div>

  const kelvinToCelsius = (kelvin: number) => {
    return `${(kelvin - 273.15).toFixed(2)} °C`
  }
  return (
    <div className="mx-auto container">
      {!isGeoLocationPrompt && (
        <div>
          <p>Error in Geo Location</p>
        </div>
      )}
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Current</h3>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">DATE</dt>
                    <dd className="mt-1 text-lg leading-9 font-semibold text-gray-900">
                      {format(new Date(weatherData.current.dt * 1000), 'MM/dd/yyyy')}
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                      WEATHER
                    </dt>
                    <dd className="mt-1 text-lg leading-9 font-semibold text-gray-900">
                      {weatherData.current.weather.map((w: any) => {
                        return (
                          <div key={w.id} className="flex items-center">
                            <img
                              src={`http://openweathermap.org/img/wn/${w.icon}.png`}
                              alt={w.main}
                            />
                            <p>
                              {w.main} : {w.description}
                            </p>
                          </div>
                        )
                      })}
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                      TEMPERATURE
                    </dt>
                    <dd className="mt-1 text-lg leading-9 font-semibold text-gray-900">
                      {kelvinToCelsius(weatherData.current.temp)}
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                      HUMIDITY
                    </dt>
                    <dd className="mt-1 text-lg leading-9 font-semibold text-gray-900">
                      {weatherData.current.humidity} %
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                      FEELS LIKE
                    </dt>
                    <dd className="mt-1 text-lg leading-9 font-semibold text-gray-900">
                      {kelvinToCelsius(weatherData.current.feels_like)}
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dl>
                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate">WIND</dt>
                    <dd className="mt-1 text-lg leading-9 font-semibold text-gray-900">
                      <p className="text-xs">Degree: {weatherData.current.wind_deg}</p>
                      <p className="text-xs">Speed: {weatherData.current.wind_speed}</p>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="my-4 text-lg">+8 days</h2>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Weather
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Temperature
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Humidity
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Feels Like
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {weatherData.daily.map((data: any, idx: number) => {
                        return (
                          <tr key={data.dt} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                              {format(new Date(data.dt * 1000), 'MM/dd/yyyy')}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                              {data.weather.map((w: any) => {
                                return (
                                  <div key={w.id} className="flex items-center">
                                    <img
                                      src={`http://openweathermap.org/img/wn/${w.icon}.png`}
                                      alt={w.main}
                                    />
                                    <p>
                                      {w.main} : {w.description}
                                    </p>
                                  </div>
                                )
                              })}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                              <p>{kelvinToCelsius(data.temp.day)}</p>
                              <p className="text-xs">
                                <span className="mr-2">Min: {kelvinToCelsius(data.temp.min)}</span>
                                <span>Max: {kelvinToCelsius(data.temp.max)}</span>
                              </p>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                              <p>{data.humidity} %</p>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                              {kelvinToCelsius(data.feels_like.day)}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Dashboard
