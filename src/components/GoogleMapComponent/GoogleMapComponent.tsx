import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { memo, useCallback, useState } from 'react'

const API_KEY = import.meta.env.VITE_API_GOOGLE_API_KEY

const containerStyle = {
  width: '100%',
  height: '400px',
}

const center = {
  lat: -6.564519322976644,
  lng: -78.65005737139855,
}

const GoogleMapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  })

  const [map, setMap] = useState(null)
  console.log(map)

  // const onLoad = useCallback(function callback(map: any) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center)
  //   map.fitBounds(bounds)

  //   setZoom(map.getZoom())
  //   setMap(map)
  // }, [])

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={19} onUnmount={onUnmount}>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default memo(GoogleMapComponent)
