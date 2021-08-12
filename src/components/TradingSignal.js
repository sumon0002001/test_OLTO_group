import React, {useState} from 'react';
import img from '../assets/img.png'
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import Modal from './Modal';
import './App.css';

const TradingSignal = () => {
    const [openModal, setOpenModal] = useState(false)
  return (
    <>
    
      <div>
        <Image src={img} alt="image" fluid />
      </div>
      <div>
        ⬆ Signal type: Long
        <br/>
        🎲 Probability: 59.15%
        <br/>
        📝 Name: Exit from a narrowing range up
        <br/>
        ⚒ Instrument: Tesla (TSLA)
        <br/>
        🎚 Timeframe: D1
        <br/>
        ⏰ Current time (America/New York): 2021-07-29 10:25:54
       <br/>
        📌 Current price: 668.28 USD
        <br/>
       📅 Optimal maximum holding period: until 2021-08-04 (6 days)
       <br/>
       ⛔ Optimal Stop Loss: 545.16 USD (3.0 model size)
       <br/>
      ✅ Optimal Take Profit: 914.52 USD (2.0 stop loss volume)
    </div>
   
    <Button variant="secondary" className="mt-2" onClick= {() => {
        setOpenModal(true)
        
    }}>Statistical Odds</Button>{' '}
    <Button variant="secondary" className="ml-2 mt-2" onClick={(e) => {
        e.preventDefault();
        window.location.href='https://www.etoro.com/markets/tsla';
    }}>Trade on Etoro</Button>
    {openModal &&  <Modal closeModal={setOpenModal}/>}
   
    </>
  )
}

export default TradingSignal;
