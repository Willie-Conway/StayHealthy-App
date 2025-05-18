import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css'

const Notification = ({children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookedData, setBookedData] = useState(null);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedBookedData = JSON.parse(localStorage.getItem('bookedData'));

    if (storedUsername) {
      setIsLoggedIn(true);
      
    }
    if (storedBookedData) {
      setBookedData(storedBookedData);
    }
    
  }, []);

  
  return (
    <div>

      <Navbar ></Navbar>
      {children}
     
      {isLoggedIn && bookedData && (
        <>
          <div className="appointment-card slide-top">
            <div className="appointment-card__content">
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message"><strong>Doctor:</strong> {bookedData[0].doctorName}</p>
              <p className="appointment-card__message"><strong>speciality:</strong> {bookedData[0].speciality}</p>
              <p className='appointment-card__message'> <strong>Name:</strong> {bookedData[0].name}</p>
              <p className='appointment-card__message'> <strong>Phone Number:</strong> {bookedData[0].phone}</p>
              <p className='appointment-card__message'><strong>Date of Appointment:</strong> {bookedData[0].selectedDate}</p>
              <p className='appointment-card__message'><strong>Time Slot:</strong> {bookedData[0].selectedSlot}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;