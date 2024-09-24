
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Benefits from './pages/BenefitsAirline/Benefits'; // Import the YourComponent component
import Benefits2 from './pages/BenefitsAll/Benefits2_1'; // Import the EditFlight component
import Benefits3_1_1 from './pages/BenefitsDetails/Benefits3_1_1'; // Import the BookingFlight component
// import Benefits3_1_2 from './Benefits3_1_2'; // Import the BookingFlight component
// import Navigation from './navigation'; // Import the Navigation component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Benefits/>} />
        <Route path="/Benefits2" element={<Benefits2/>} /> 
        {/* <Route path="/Benefits3" element={<Benefits3/>} />  */}
        <Route path="/benefits3-details/1" element={<Benefits3_1_1 />} />
        {/* <Route path="/benefits3-details/2" element={<Benefits3_1_2 />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
