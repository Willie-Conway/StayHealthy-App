import React from 'react'
import './ReportsLayout.css'

const doctors = [
    { id: 1, name: "Dr. John Doe", speciality: "Cardiology" },
    { id: 2, name: "Dr. Jane Smith", speciality: "Dermatology" },
];

function ReportsLayout() {
    const reportURL = '/patient_report.pdf';

  return (
    <div className='reports-container'>
        <h1>Reports</h1>
        {doctors.length === 0 ? (

            <p>No reports available</p>
            ) : (
                <div className="reports">
                <div className="reports-header">
                    <p>Serial Number</p>
                    <p>Doctor Name</p>
                    <p>Doctor Speciality</p>
                    <p>View Report</p>
                    <p>Download Report</p>
                </div>
                <div className="reports-body">
                    {doctors.map((doctor) => (
                        <div key={doctor.id} className="doctor-report">
                            <p>{doctor.id}</p>
                            <p>{doctor.name}</p>
                            <p>{doctor.speciality}</p>
                            <p className='report-btn'>
                                <a href={reportURL} target="_blank" rel="noopener noreferrer">View Report</a>
                            </p>
                            <p className='report-btn'>
                               <a href={reportURL} download='patient_report.pdf' rel='noopener noreferrer' > Download Report</a> 
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            )
        }
       
    </div>
  )
}

export default ReportsLayout