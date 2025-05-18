import React from 'react';

import './App.css';

import { Routes, Route } from "react-router-dom";

import LandingPage from './Components/Landing_Page/LandingPage';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';
import HealthBlog from './Components/HealthBlog/HealthBlog';


function App() {

  return (
    <div className="App">
          
          <Notification> 

            <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Sign_Up/>}/>
              <Route path='/instant-consultation' element={<InstantConsultation/>}/>
              <Route path='/search/doctors' element={<BookingConsultation /> }/>
              <Route path='/healthblog' element={<HealthBlog /> }/> 
              <Route path='/reviews' element={<ReviewForm /> }/>
              <Route path='/profile' element={<ProfileCard /> }/>
              <Route path='/reports' element={<ReportsLayout /> }/>
            </Routes>
          </Notification>
    </div>
  );
}

export default App;