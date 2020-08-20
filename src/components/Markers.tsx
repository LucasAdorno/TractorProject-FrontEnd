import React from 'react'
import { Marker } from 'react-leaflet';
import LocationIcon from './LocationIcon';

interface makersProps {
  currentLocation: [number, number]
}

const Markers: React.FC<makersProps> = ({currentLocation}) => {

  const markers =
    <Marker position={currentLocation} 
    icon={LocationIcon} />

  return <>{markers}</>
};

export default Markers;
