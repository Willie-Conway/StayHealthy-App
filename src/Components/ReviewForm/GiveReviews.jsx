import React, { useState } from 'react'

function GiveReviews({onSubmit}) {

    const [formData, setFormData] = useState({
        name: '',
        review: '',
        rating: 0,
        
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: '', review: '', rating: 0 });
    };


  return (
    <div style={{ width:'60%',padding:'20px',borderRadius:'10px',margin:'20px',background:'#f4f4f4'}}>
        <h2 style={{textAlign:'center'}}>Give your Review</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor='name'>Name:</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor='review'>ٌReview:</label>
                <textarea
                    type='text'
                    id='review'
                    name='review'
                    value={formData.review}
                    onChange={handleChange}
                    required
                    />
            </div>
            <div className="form-group">
                <label >Rating:</label>
                <div className="star-rating">
                    {[...Array(5)].map((star,index) => {
                        const ratingValue = index + 1;

                        return (
                            <span key={index}
                                className={`star ${ratingValue <= formData.rating ? 'selected' : ''}`} 
                                onClick={() => setFormData({ ...formData, rating: ratingValue })}
                            >
                            ⭐
                            </span>
                        )
                    })}
                </div>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>

    
  )
}

export default GiveReviews