// import React from 'react';
import './Benefits2_1.css';
import LGST from './assets/LGST.png'
import Logo_AirAsia from './assets/Logo_AirAsia.png'
import Logo_Nokair from './assets/Logo_Nokair.png'
import Logo_ThaiAirways from './assets/Logo_ThaiAirways.png'
import Logo_Vietjet from './assets/Logo_Vietjet.png'
import pointsicon from './assets/pointsicon.png'
import BKtoSM1 from './assets/BKtoSM1.jpeg'
import BKtoMD1 from './assets/BKtoMD1.jpg'
import BKtoLP1 from './assets/BKtoLP1.jpeg'
import BKtoT1 from './assets/BKtoT1.jpg'
import BKtoPK1 from './assets/BKtoPK1.png'
import BKtoCH1 from './assets/BKtoCH1.jpg'
import BKtoST1 from './assets/BKtoST1.jpg'
import CHtoKB1 from './assets/CHtoKB1.jpg'
import { useNavigate } from "react-router-dom"
import React, { useState } from 'react';


const Benefits2_1 = () => {
  const navigate = useNavigate();

  const handleBenefitsClick = () => {
    navigate("/");
  };

  const handleBenefits2Click = () => {
    navigate("/Benefits2");
  };

  // const handleBenefits3Click = () => {
  //   navigate("/Benefits3");
  // };

  const handleBenefits3Click = (flightId: number) => {
    navigate(`/benefits3-details/${flightId}`); // เปลี่ยนหน้าไปตาม flightId
  };

  const [selectedAirline, setSelectedAirline] = useState<number>(1);

  const airlines = ['Airline 1', 'Airline 2', 'Airline 3', 'Airline 4'];
  const flights = [
    { route: 'Bangkok (Suvarnabhumi) - Samui', price: '6,500 P', img: BKtoSM1, id: 1 },
    { route: 'Bangkok (Suvarnabhumi) - Maldives', price: '14,000 P', img: BKtoMD1, id: 2 },
    { route: 'Bangkok (Suvarnabhumi) - Lampang', price: '5,000 P', img: BKtoLP1, id: 3 },
    { route: 'Bangkok (Suvarnabhumi) - Trat', price: '5,000 P', img: BKtoT1, id: 4 },
    { route: 'Bangkok (Suvarnabhumi) - Phuket', price: '5,000 P', img: BKtoPK1, id: 5 },
    { route: 'Bangkok (Suvarnabhumi) - Chiang Mai', price: '5,000 P', img: BKtoCH1, id: 6 },
    { route: 'Bangkok (Suvarnabhumi) - Sukhothai', price: '5,000 P', img: BKtoST1, id: 7 },
    { route: 'Chiang Mai - Krabi', price: '9,000 P', img: CHtoKB1, id: 8 },
  ];

  return (
    <div>
      {/* Header */}
      <div className="header">
        <img className="logo2_1" src={LGST} alt="logo" />
        <div className="bum1">
          <button>Home</button>
        </div>
        <div className="bum2">
          <button>Flight</button>
        </div>
        <div className="bum3">
          <button onClick={handleBenefitsClick} >Benefits</button>
        </div>
        <div className="bum4">
          <button>Help Center</button>
        </div>
      </div>

      {/* Airline Selector */}
      {/* const airlines = ['Airline 1', 'Airline 2', 'Airline 3', 'Airline 4']; */}
      <div className="airline-container">
        <img className="logoAA2" src={Logo_AirAsia} alt="logoAA" onClick={handleBenefits2Click}/>
        <img className="logoNA2" src={Logo_Nokair} alt="logoNA" onClick={handleBenefits2Click}/>
        <img className="logoTA2" src={Logo_ThaiAirways} alt="logoTA" onClick={handleBenefits2Click}/>
        <img className="logoVJ2" src={Logo_Vietjet} alt="logoVJ" onClick={handleBenefits2Click}/>
        {/* {airlines.map((airline, index) => (
          <div
            key={index}
            className={selectedAirline === index + 1 ? 'active' : ''}
            onClick={() => setSelectedAirline(index + 1)}
          />
        ))} */}
      </div>
      <div className="airline-text">
          <span className="airline1">AirAsia</span>
          <span className="airline2">Thai Airways</span>
          <span className="airline3">NokAir</span>
          <span className="airline4">Vietjet</span>
        </div>

      {/* Flight List */}
      <div className="flight-grid">
        {flights.map((flight) => (
          <div className="flight-card" /*onClick={handleBenefits3Click}*/ onClick={() => handleBenefits3Click(flight.id)} key={flight.id}>
            <div>
              <img src={flight.img} alt="Flight" />
            </div>
            <div className="route">{flight.route}</div>
            {/* <img src={flight.img2} alt="logo" /> */}
            <div className="a-price">
              <img className="p2-icon" src={pointsicon} alt="icon" />
              <div className="price"> {flight.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits2_1;
