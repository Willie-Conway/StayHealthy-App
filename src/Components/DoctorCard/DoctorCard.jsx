import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import { v4 as uuidv4 } from 'uuid';
import profilePic from '../../assets/doctor.svg'
import AppointmentForm from '../AppointmentForm/AppointmentForm';



function DoctorCard({name, experience, ratings, speciality }) {

    const [showModal, setShowModal] = useState(false);
    const [appointments, setAppointments] = useState( JSON.parse(localStorage.getItem('bookedData')) || []);
    
    const handleBooking = () => {
        setShowModal(true)
        if (appointments.length > 0) {
            alert('You have already booked an appointment. You can only book one appointment at a time.');
        }
    };

    useEffect(() => {
        
        localStorage.setItem('bookedData', JSON.stringify(appointments));
        if (appointments.length === 0) {
            localStorage.removeItem('bookedData');
        }
    },[appointments] )   

    const handleCancel = (appointmentId) => {
        const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
        setAppointments(updatedAppointments);
        window.location.reload();
    }; 
    
    const handleFormSubmit = (appointmentData) => {
        handleBooking()
        
        const newAppointment = {
        id: uuidv4(),
        doctorName: name,
        speciality,
        ...appointmentData,

        };
        const updatedAppointments = [newAppointment];
        setAppointments(updatedAppointments);
        setShowModal(false);
        window.location.reload();
    };
   
  return (    
   <div className='doctor-card-container'>
        <div className="doctor-card-details-container">
        
            <div className='doctor-card-profile-image-container'>
                <img src={profilePic} alt="doctor"/>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg> */}
            <div className="doctor-card-details">
                <div className="doctor-card-detail-name">{name}</div>
                <div className="doctor-card-detail-speciality">{speciality}</div>
                <div className="doctor-card-detail-experience">{experience} years experience</div>
                <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
            </div>
        </div>

        <div className='doctor-card-options-container'>
            <Popup
                style = {{backgroundColor:'#fff'}}
                trigger={
                    <button className={`book-appointment-btn ${appointments[0]?.doctorName === name ? "cancel-appointment" : " "}`}>
                        {appointments[0]?.doctorName === name ? (<div>Cancel Appointment</div>) : (<div>Book Appointment</div>) }
                        <div>No Booking Fee</div>                   
                    </button>
                }
                modal
                open={showModal}
                onClose={()=> setShowModal(false)}
            >
                { (close) => (
                    <div className="doctorbg" style={{ height: '100vh' }}>
                        <div>
                            <div className="doctor-card-profile-image-container">
                                <img src={profilePic} alt="doctor"/>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16"> <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> </svg> */}
                            </div>
                            <div className="doctor-card-details">
                                <div className="doctor-card-detail-name">{name}</div>
                                <div className="doctor-card-detail-speciality">{speciality}</div>
                                <div className="doctor-card-detail-experience">{experience} years experience</div>
                                <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
                            </div>
                        </div>
                        {appointments[0]?.doctorName === name ?
                            (
                            <>
                                <h3 style={{ textAlign: 'center' }}>Appointment Booked!</h3>
                                {appointments.map((appointment) => (
                                <div className="bookedInfo" key={appointment.id}>
                                    <p>Name: {appointment.name}</p>
                                    <p>Phone Number: {appointment.phone}</p>
                                    <p>Date of Appoinment: {appointment.selectedDate}</p>
                                    <p>Time Slot: {appointment.selectedSlot}</p>
                                    <button onClick={() => handleCancel(appointment.id)}>Cancel Appointment</button>
                                </div>
                                ))}
                            </>
                            ) : (<AppointmentForm doctorName={name} doctorSpeciality={speciality} onSubmit={handleFormSubmit} />) }
                    </div>
                )}
            </Popup>                       
        </div>
    </div>  
)
}

export default DoctorCard