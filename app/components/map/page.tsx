import React from 'react'
import {
    Map,
    MapMarker,
    MapPopup,
    MapTileLayer,
    MapZoomControl,
} from "@/components/ui/map"

function MapWrapper() {
  return (
      <Map center={[-34.6, -58.4]}>
          <MapTileLayer 
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              subdomains="abcd" />
          <MapZoomControl />

      </Map>
  )
}

export default MapWrapper