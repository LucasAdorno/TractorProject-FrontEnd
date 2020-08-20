import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './Markers';

interface IMapView {
  lat: number,
  long: number,
  id?: string,
  hour?: string,
  date?: string 
}

const MapView: React.FC <IMapView> = ({lat, long}) => {

  const currentLocation = {lat, lng: long }
  const zoom = 14;

  return (
    <Map center={currentLocation} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Markers currentLocation={[lat, long]} />
    </Map>
  );
}

export default MapView;
