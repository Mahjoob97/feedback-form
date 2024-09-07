import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }));
};

  const handleSubmit = (event) => {
    event.preventDefault()
    const confirmationMessage = `
    Name: ${formData.name}
    Email: ${formData.email}
    Feedback: ${formData.feedback}
    Rating: ${formData.rating}`;
    const isConfirmed = window.confirm(`Please confirm your details:\n${confirmationMessage}`)
    if (isConfirmed) {
      console.log('Submitting feedback', formData)
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: ''
      })
      alert("Thank you for your valuable feedback")
    }
  }
  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>

        <input type='text' name='name' placeholder='name' value={formData.name} onChange={handleChange}/>
        <input type="email" name='email' placeholder='email' value={formData.email} onChange={handleChange} />
        <textarea name="feedback" placeholder='Your feedback' value={formData.feedback} onChange={handleChange}></textarea>
        <div style={{display: 'flex', gap: '10px', flexDirection: 'column'}}>
          <span>Rate us :</span>
          <p>
          <input type="radio" value='1' name='rating' onChange={handleChange}/>  1 (Excellent)
          </p>
          <p>
          <input type="radio" value='2' name='rating' onChange={handleChange}/>  2 (Very Good)
          </p>
          <p>
            <input type="radio" value='3'  name='rating' onChange={handleChange}/>  3 (Good)
          </p>
          <p>
            <input type="radio" value='4' name='rating' onChange={handleChange}/>  4 (Acceptable)
          </p>
          <p>
            <input type="radio" value='5' name='rating' onChange={handleChange}/>  5 (Poor)
          </p>
        </div>
        <button type='submit' onClick={handleSubmit}>Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
