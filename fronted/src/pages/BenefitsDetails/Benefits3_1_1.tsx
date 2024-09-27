import React, { useState, useEffect } from 'react';
import './Benefits3_1_1.css';
import LGST from '../../assets/LGST.png';
import Logo_AirAsia from '../../assets/Logo_AirAsia.png';
import BKtoSM1 from '../../assets/BKtoSM1.jpeg';
import BKtoSM2 from '../../assets/BKtoSM2.jpg';
import BKtoSM3 from '../../assets/BKtoSM3.jpg';
import pointsicon from '../../assets/pointsicon.png';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios'; //เชื่อมกับ Backend
import { BenefitsInterface } from '../../interfaces/BenefitsPackage'

const Benefits3_1_1 = () => {
  const navigate = useNavigate();

  const handleBenefitsClick = () => {
    navigate("/");
  };

  const handleBenefits2Click = () => {
    navigate("/Benefits2");
  };

  const [Benefits, setBenefits] = useState<BenefitsInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/benefits/${id}`);
        console.log(response.data); // Check what data you receive
        setBenefits(response.data.data);
      } catch (error) {
        console.error("Error fetching flights data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBenefits();
  }, [id]);

  // const [selectedClass, setSelectedClass] = useState<string | null>(null); // ค่าเริ่มต้นคือ 'Economy'
  // const [selectedTrip, setSelectedTrip] = useState<string | null>(null); // ค่าเริ่มต้นคือ 'One Way'
  // const handleBenefits3Click = () => {
  //   navigate("/Benefits3");
  // };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Benefits) {
    return <div>Benefit not found</div>;
  }

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

      <div className="frame-flight-details" >
        {/* {Array.isArray(Benefits) && Benefits.map((benefits) => ( */}
          <div className="flight-details" >
            <div className="img-benefits-details3_1_1">
              <img className="img1" src={Benefits.Img1} alt="img1" />
              <div className="img-benefits-details3_1_1_y">
                <img className="img2" src={Benefits.Img2} alt="img2" />
                <img className="img3" src={Benefits.Img3} alt="img3" />
              </div>
            </div>
            <div className="flight-info">
              <span className='ff'>From : {Benefits.FlyingFrom}</span>
              <span className='gt'>To : {Benefits.GoingTo}</span>
              <div className="a-airline" >
                <span className='airline-name'> AirAsia </span>
                <img className="logoAA3" src={Logo_AirAsia} alt="logoAA3" />
              </div>
              <div className="a-points">
                <img className="p-icon" src={pointsicon} alt="icon" />
                <span className="points">{Benefits.PointRequired} P</span>
            </div>

              <span className='class'>Class : {Benefits.Class}</span>
              {/* <div className="class-class">
                <div className='eco-button'>{benefits.Class}</div> */}
                {/* <div className={`bu-button ${selectedClass === 'Business' ? 'selected' : ''}`}>
                  <button onClick={() => setSelectedClass('Business')}>Business</button>
                </div> */}
              {/* </div> */}

              <span className='trip'>Trip : {Benefits.Trip}</span>
              {/* <div className="trip-class">
                <div className={`ow-button ${selectedTrip === 'One Way' ? 'selected' : ''}`}>
                  <button onClick={() => setSelectedTrip('One Way')}>One Way</button>
                </div>
              </div> */}
              <button className="redeem-button">Redeem benefits</button>
            </div>
          </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default Benefits3_1_1;

