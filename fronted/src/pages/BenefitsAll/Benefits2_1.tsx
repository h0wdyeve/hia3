import React, { useState, useEffect } from 'react';
import './Benefits2_1.css';
import LGST from '../../assets/LGST.png';
import Logo_AirAsia from '../../assets/Logo_AirAsia.png';
import Logo_Nokair from '../../assets/Logo_Nokair.png';
import Logo_ThaiAirways from '../../assets/Logo_ThaiAirways.png';
import Logo_Vietjet from '../../assets/Logo_Vietjet.png';
import pointsicon from '../../assets/pointsicon.png';
import { useNavigate } from "react-router-dom";
import axios from 'axios'; //เชื่อมกับ Backend
import { BenefitsInterface } from '../../interfaces/BenefitsPackage'


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

  const handleBenefits3Click = (benefitsid: number) => {
    navigate(`/benefits3-details/${benefitsid}`); // เปลี่ยนหน้าไปตาม benefitsId
  };

  const [Benefits, setBenefits] = useState<BenefitsInterface[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const response = await axios.get('http://localhost:8080/benefits');
        console.log(response.data); // Check what data you receive
        setBenefits(response.data.data);
      } catch (error) {
        console.error("Error fetching flights data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBenefits();
  }, []);

  
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
        <img className="logoAA2" src={Logo_AirAsia} alt="logoAA" onClick={handleBenefits2Click} />
        <img className="logoNA2" src={Logo_Nokair} alt="logoNA" onClick={handleBenefits2Click} />
        <img className="logoTA2" src={Logo_ThaiAirways} alt="logoTA" onClick={handleBenefits2Click} />
        <img className="logoVJ2" src={Logo_Vietjet} alt="logoVJ" onClick={handleBenefits2Click} />
      </div>
      <div className="airline-text">
        <span className="airline1">AirAsia</span>
        <span className="airline2">Thai Airways</span>
        <span className="airline3">NokAir</span>
        <span className="airline4">Vietjet</span>
      </div>

      {/* Flight List */}
      <div className="flight-grid">
        {Array.isArray(Benefits) && Benefits.map((benefits) => (
          // benefits.id == undefined ? (
          // {b_id.map((bid) => (
            <div key={benefits.ID} className="flight-card" /*onClick={handleBenefits3Click}*/ onClick={() => handleBenefits3Click(benefits.ID)} >
              <div>
                <img src={benefits.Img1} alt="Flight" />
              </div>
              <div className="route">{benefits.BenefitsName}</div>
              {/* <img src={flight.img2} alt="logo" /> */}
              <div className="a-price">
                <img className="p2-icon" src={pointsicon} alt="icon" />
                <div className="price"> {benefits.PointRequired} P</div>
              </div>
            </div>
          // ))}
          // ) : <div>Tawun</div>
        ))}
      </div>
    </div>
  );
};

export default Benefits2_1;
