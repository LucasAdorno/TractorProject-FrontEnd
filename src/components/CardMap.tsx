import React from 'react';
import MapView from './MapView'

interface InfosProps {
  id?: string,
  hour?: string,
  date?: string,
  long: number,
  lat: number
}

interface TotalInfos {
  infos: InfosProps[]
}

const CardMap: React.FC<TotalInfos> = ({ infos }) => {
  return <div className='App'>
    {infos.map(i =>
          <div className='info-container'>
            <h3 className='id-tractor'>Trator: {i.id}</h3>
            <MapView lat={Number(i.lat)} long={Number(i.long)} />
            <div className='date-hour-div'>
              <h5>{i.date}</h5>
              <h5>{i.hour}</h5>
            </div>
          </div>
        )}
  </div>;
}

export default CardMap;