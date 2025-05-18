import React, { useState } from 'react';
import './ReviewForm.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import GiveReviews from './GiveReviews';

const doctors = [
    { id: 1, name: "Dr. John Doe", speciality: "Cardiology" },
    { id: 2, name: "Dr. Jane Smith", speciality: "Dermatology" },
];

function ReviewForm() {
    const [selectedDoctorId, setSelectedDoctorId] = useState(null);
    const [reviews, setReviews] = useState({});

    const handleSubmit = (doctorId, formData) => {
        setReviews(prevReviews => ({
            ...prevReviews,
            [doctorId]: formData  // id:{name, review,rating}
        }));
        setSelectedDoctorId(null);
    };

    const handleOpenForm = (doctorId) => {
        setSelectedDoctorId(doctorId);
    };

    return (
        <div className="reviews-container">
            <h1>Reviews</h1>
            <div className="reviews">
                <div className="reviews-header">
                    <p>Serial Number</p>
                    <p>Doctor Name</p>
                    <p>Doctor Speciality</p>
                    <p>Provide Review</p>
                    <p>Review Given</p>
                </div>
                <div className="reviews-body">
                    {doctors.map((doctor) => (
                        <div key={doctor.id} className="doctor-review">
                            <p>{doctor.id}</p>
                            <p>{doctor.name}</p>
                            <p>{doctor.speciality}</p>
                            {reviews[doctor.id] ? (
                                <p className='review-btn disable-btn'>Review Given</p>
                            ) : (
                                <Popup
                                    trigger={
                                        <p className='review-btn' onClick={() => handleOpenForm(doctor.id)}>Give Review</p>
                                    }
                                    modal
                                    open={selectedDoctorId === doctor.id}
                                    onClose={() => setSelectedDoctorId(null)}
                                >
                                    {close => (
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                            <GiveReviews onSubmit={(formData) => handleSubmit(doctor.id, formData)} />
                                            <button onClick={() => { close(); setSelectedDoctorId(null); }}>Close</button>
                                        </div>
                                    )}
                                </Popup>
                            )}
                            <p>{reviews[doctor.id]?.review || ''}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ReviewForm;
