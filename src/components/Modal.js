import React from 'react';
import './Modal.css';
import {Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import img from '../assets/img.png'

const Modal = ({closeModal}) => {
    return (
        <Container >
       
        <div className="modalBackground">
            <div className="modalContainer"> 
                 <div className="modal-close " >
           <button className="titleCloseBtn" onClick={() => {
               closeModal(false)
           }}>x</button>
        </div>
       

           <div className="modal-test" >
            <h1>Trading Signal for TSLA - Statistical Odds</h1>
            <p>OLTO Trading MentorJuly 29, 2021</p>
        </div>
        <div>
            <h2>1.Signal</h2>
        </div>
        <br/>
        <br/>
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
<br/>


📅 Optimal maximum holding period: until 2021-08-04 (6 days)
<br/>
⛔ Optimal Stop Loss: 545.16 USD (3.0 model size)
<br/>
✅ Optimal Take Profit: 914.52 USD (2.0 stop loss volume)
<br/>

        </div>
        <div>
        <Image src={img} alt="image" fluid />
      </div>

            </div>
          
        </div>
          
        </Container>
    )
}

export default Modal
