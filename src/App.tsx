import React, { ReactElement, useState, useEffect, useRef, ChangeEvent } from 'react';
import CardMap from './components/CardMap';
import Header from './components/Header';
import './App.css';
import api from './services/api';

interface IAttInfos {
  id: string,
  lat: number,
  long: number,
  hour: string,
  date: string
}

function App(): ReactElement {
  
  let [infos, setInfos] = useState([{ lat: 0, long: 0 }]);
  const [attDate, setAttDate] = useState('');
  const [attHour, setAttHour] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  let attInfos: IAttInfos[];

  const updateDate = () => {
    const data = new Date();
    setAttDate(`${data.getDate()>=10 ? data.getDate() : '0'+data.getDate()}/${data.getMonth()>=10 ? data.getMonth() : '0'+data.getMonth()}/${data.getUTCFullYear()}`)
    setAttHour(`${data.getHours()}h${data.getMinutes()>=10 ? data.getMinutes() : '0'+data.getMinutes()}`)
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    api.get('users').then(res => {
      attInfos = res.data;
      if(inputRef && inputRef.current){
        const searchId = inputRef.current.value
        if (searchId !== '') {
          let infosFiltered = attInfos.filter(i => i.id === searchId);
          setInfos(infosFiltered);
        }
        else {
          setInfos(attInfos);
        }
      }
    })
  }

  const handleClickButton = () => {
    api.get('users').then(res => {
      attInfos = res.data;
      if(inputRef && inputRef.current){
        inputRef.current.value = '';
      }
      setInfos(attInfos);
    })
    updateDate();
  }

  useEffect(() => {
    api.get('users').then(res => {
      attInfos = res.data;
      setInfos(attInfos);
    })
    updateDate();
  }, [])

  return (
    <>
      <Header />
      <div id="inputs-container">
        <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInput(e)} ref={inputRef} type='number' placeholder='Trator Nº' />
        <div>
          <button onClick={() => handleClickButton()}>Atualizar lista</button>
          <h6>Ultima atualização feita dia {attDate} às {attHour} </h6>
        </div>
      </div>
      <CardMap infos={infos}/>
    </>
  );
}

export default App;
