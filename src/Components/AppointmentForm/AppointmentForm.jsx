import React, { useState } from 'react'

function AppointmentForm({onSubmit}) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [selectedSlot, setSelectedSlot] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phone, selectedSlot,selectedDate }); //props
        setName('');
        setPhone('');
        setSelectedSlot('');
    }

  return (
    <form onSubmit={handleFormSubmit} className='appointment-form'>

        <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
        </div>

        <div className='form-group'>
            <label htmlFor='phone'>Phone Number:</label>
            <input
                type='tel'
                id='phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
        </div>

        <div className='form-group'>
            <label htmlFor="date">Date of Appoinment:</label>
            <input 
                type="date" 
                id="date" 
                required
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                
            />
        </div>

        <div className='form-group'>
            <label htmlFor="time">Book Time Slot:</label>
            <input 
                type="time" 
                id="time"  
                required
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
            />
        </div>
        <button type='submit'>Book Now</button>

    </form>
  )
}

export default AppointmentForm