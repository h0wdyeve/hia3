import React, { useState, useEffect } from 'react';
import './Benefits.css';
import LGST from '../../assets/LGST.png';
import Logo_AirAsia from '../../assets/Logo_AirAsia.png';
import Logo_Nokair from '../../assets/Logo_Nokair.png';
import Logo_ThaiAirways from '../../assets/Logo_ThaiAirways.png';
import Logo_Vietjet from '../../assets/Logo_Vietjet.png';
import { useNavigate } from "react-router-dom"

import { GetAllAirline } from "../../services/index";
import { AirlineInterface } from "../../interfaces/BenefitsPackage";
import axios from 'axios'; //เชื่อมกับ Backend

export default function Benefits() {
  const navigate = useNavigate();

  const handleBenefitsClick = () => {
    navigate("/");
  };

  const handleBenefits2Click = () => {
    navigate("/Benefits2");
  };

  const handleBenefits3Click = () => {
    navigate("/Benefits3");
  };

  const [Airlines, setAirlines] = useState<AirlineInterface[]>([]);

  useEffect(() => {
    // เรียก API เพื่อดึงข้อมูล flight
    const fetchAirlines = async () => {
      try {
        const response = await axios.get('/airlines');
        console.log(response.data); // ตรวจสอบข้อมูล
        setAirlines(response.data);
      } catch (error) {
        console.error("Error fetching flights data:", error);
      }
    };

    fetchAirlines();
  }, []);

  // useEffect(() => {
  //   const Authorization = localStorage.getItem("token");
  //   const Bearer = localStorage.getItem("token_type");

  //   const requestOptions = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `${Bearer} ${Authorization}`,
  //     },
  //   };

  //   axios.get<AirlineInterface[]>('http://localhost:8000/airlines', requestOptions)
  //     .then(response => {
  //       setAirlines(response.data); // บันทึกข้อมูลลงใน state
  //     }) 
  //     .catch(error => {
  //       console.error('Fetching is error!:', error.response ? error.response.data : error.message);
  //     });
  // }, []);

  return (
    <div className='main-container'>
      <div className='flex-row'>
        <div className='rectangle'>
          <img className="logo" src={LGST} alt="logo" />
            <div className="rectangle-1">
              <button>Home</button>
            </div>
            <div className="rectangle-2">
              <button>Flight</button>
            </div>
            <div className="rectangle-3">
              <button onClick={handleBenefitsClick}>Benefits</button>
            </div>
            <div className="rectangle-4">
              <button>Help Center</button>
          </div>
        </div>
        <div className='rectangle-7'>
          <span className='select-airline'>Please select an airline</span>
        </div>
      </div>
      <div className='flex-row-ff'>
        <img className="logoAA" src={Logo_AirAsia} alt="logoAA" onClick={handleBenefits2Click}/>
        <img className="logoNA" src={Logo_Nokair} alt="logoNA" onClick={handleBenefits2Click}/>
        <img className="logoTA" src={Logo_ThaiAirways} alt="logoTA" onClick={handleBenefits2Click}/>
        <img className="logoVJ" src={Logo_Vietjet} alt="logoVJ" onClick={handleBenefits2Click}/>
      </div>

      <div className='flex-row-fb'>
        {Array.isArray(Airlines) && Airlines.map((airline, index) => (
          <div key={index} className="selectAirline-card">
            <div className='airline-1' onClick={handleBenefits2Click}>{airline.AirlineName}</div>
          </div>
        ))}
      </div>

    </div>
  );
}
