import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
]
function FindDoctorSearch() {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(initSpeciality);

    const navigate = useNavigate();

    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);

        navigate(`/search/doctors?speciality=${speciality}`);
        window.location.reload();
    }


  return (
    
    <div className='finddoctor'>
    <center>
        <h1>Find a doctor at your own ease </h1>
        <div>
            <i style={{color:'#000000',fontSize:'20rem'}} className="fa fa-user-md"></i>
        </div>
            <div className="home-search-container" >
                <div className="doctor-search-box">
                {/* <p>Perform a search to see the results.</p> */}
                    <input 
                        type="text" 
                        className="search-doctor-input-box" 
                        placeholder="Search doctor by speciality" 
                        onFocus={() => setDoctorResultHidden(false)} 
                        onBlur={() => setDoctorResultHidden(true)} 
                        value={searchDoctor} 
                        onChange={(e) => setSearchDoctor(e.target.value)} />

                    <div className="findiconimg">
                        <i className="fa fa-search"></i>
                    </div>
                    <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                        {
                            specialities.map(speciality =>
                             <div className="search-doctor-result-item" key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}  >
                                <span><i className="fa fa-search"></i></span>
                                <span>{speciality}</span>
                                <span>SPECIALITY</span>
                            </div>)
                        }
                    </div>
                </div>
            </div>
    </center>
</div>
  )
}

export default FindDoctorSearch