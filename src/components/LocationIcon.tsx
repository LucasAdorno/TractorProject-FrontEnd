import L from 'leaflet';

const LocationIcon = L.icon({
  iconUrl: require('../assets/venue_location_icon.svg'),
  iconRetinaUrl: require('../assets/venue_location_icon.svg'),
  iconSize: [35, 35],
  className: 'leaflet-venue-icon'
});

export default LocationIcon
