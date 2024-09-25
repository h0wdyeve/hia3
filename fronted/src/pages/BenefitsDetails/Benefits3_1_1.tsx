import React, { useState } from 'react';
import './Benefits3_1_1.css';
import LGST from '../../assets/LGST.png';
import BKtoSM1 from '../../assets/BKtoSM1.jpeg';
import BKtoSM2 from '../../assets/BKtoSM2.jpg';
import BKtoSM3 from '../../assets/BKtoSM3.jpg';
import pointsicon from '../../assets/pointsicon.png';
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";


const Benefits3_1_1 = () => {
  const navigate = useNavigate();

  const handleBenefitsClick = () => {
    navigate("/");
  };

  const handleBenefits2Click = () => {
    navigate("/Benefits2");
  };

  const [selectedClass, setSelectedClass] = useState<string | null>(null); // ค่าเริ่มต้นคือ 'Economy'
  const [selectedTrip, setSelectedTrip] = useState<string | null>(null); // ค่าเริ่มต้นคือ 'One Way'
  // const handleBenefits3Click = () => {
  //   navigate("/Benefits3");
  // };
  // interface FlightParams {
  //   flightId: string; // บอกว่า flightId เป็น string
  // }

  // const { flightId } = useParams();

  // const flight = flights.find(flight => flight.id === parseInt(flightId ?? ''));
  return (
    <div className="airline-selection">
      <header className="header-bar">
        <img className="head-logo" src={LGST} alt="logo" />
        <div className="navbar-container">
          <div className="navbar1">
            <button>Home</button>
          </div>
          <div className="navbar2">
            <button>Flight</button>
          </div>
          <div className="navbar3">
            <button onClick={handleBenefitsClick}>Benefits</button>
          </div>
          <div className="navbar4">
            <button>Help Center</button>
          </div>
        </div>
      </header>
      <div className="header2"></div>

      <div className="frame-flight-details">
        <div className="flight-details">
          <div className="img-benefits-details3_1_1">
            <img className="BKtoSM1" src={BKtoSM1} alt="img" />
            <div className="img-benefits-details3_1_1_y">
              <img className="BKtoSM2" src={BKtoSM2} alt="img" />
              <img className="BKtoSM3" src={BKtoSM3} alt="img" />
            </div>
          </div>
          <div className="flight-info">
            <span className='ff-gt'>Bangkok(Suvarnabhumi) - Samui</span>
            <span className='airline-name'>Airline 1</span>
            <div className="a-points">
              <img className="p-icon" src={pointsicon} alt="icon" />
              <span className="points">6,500 P</span>
            </div>

            <span className='class'>Class :</span>
            <div className="class-class">
              {/* <div className={`eco-button ${selectedClass === 'Economy' ? 'selected' : ''}`}>
                <button onClick={() => setSelectedClass('Economy')}>Economy</button>
              </div> */}
              <div className={`bu-button ${selectedClass === 'Business' ? 'selected' : ''}`}>
                <button onClick={() => setSelectedClass('Business')}>Business</button>
              </div>
              {/* <div className="eco-button">
                <button>Economy</button>
              </div>
              <div className="bu-button">
                <button>Business</button>
              </div> */}
            </div>

            <span className='trip'>Trip :</span>
            <div className="trip-class">
              <div className={`ow-button ${selectedTrip === 'One Way' ? 'selected' : ''}`}>
                <button onClick={() => setSelectedTrip('One Way')}>One Way</button>
              </div>
              {/* <div className={`rt-button ${selectedTrip === 'Round Trip' ? 'selected' : ''}`}>
                <button onClick={() => setSelectedTrip('Round Trip')}>Round Trip</button>
              </div> */}
              {/* <div className="ow-button">
                <button>One Way</button>
              </div>
              <div className="rt-button">
                <button>Round Trip</button>
              </div> */}
            </div>
            <button className="redeem-button">Redeem benefits</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits3_1_1;
