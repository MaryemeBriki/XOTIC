import React, { useState } from 'react';
import './FormComponent.css'; // Import your CSS file

const FormComponent = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    telephone: '',
    age: '',
    password: '',
    date: '',
    gender: '',
    studyYear: '',
    school: '',
    university: '',
    city: '',
    enrollmentYear: '',
    graduationYear: '',
    major: '',
    clubs: '',
    interests: '',
    socialMedia: '',
    jobPosition: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    for (const key in formData) {
      if (formData[key] === '') {
        alert('Please fill out all fields');
        return;
      }
    }

    // Additional validation logic can be added as needed

    // Display the "Thank you" message (you may want to use state to conditionally render this)
    console.log('Thank you for filling out the form correctly 💙');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Form Validation</h2>
        <div className="form-group fullname">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            placeholder="Enter your full name"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group email">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
  
        // ... (previous code)

<div className="form-group telephone">
  <label htmlFor="telephone">Phone Number</label>
  <input
    type="tel"
    id="telephone"
    placeholder="Enter your phone number"
    value={formData.telephone}
    onChange={handleChange}
    required
  />
</div>
<div className="form-group age">
  <label htmlFor="age">Age</label>
  <input
    type="number"
    id="age"
    placeholder="Enter your age"
    value={formData.age}
    onChange={handleChange}
    required
  />
</div>
<div className="form-group study-year">
  <label htmlFor="study-year">Current Study Year</label>
  <input
    type="text"
    id="study-year"
    placeholder="Enter your current study year"
    value={formData.studyYear}
    onChange={handleChange}
    required
  />
</div>
<div className="form-group school">
  <label htmlFor="school">School</label>
  <input
    type="text"
    id="school"
    placeholder="Enter your school"
    value={formData.school}
    onChange={handleChange}
    required
  />
</div>
<div className="form-group university">
  <label htmlFor="university">University</label>
  <input
    type="text"
    id="university"
    placeholder="Enter your university"
    value={formData.university}
    onChange={handleChange}
    required
  />
</div>
<div className="form-group city">
  <label htmlFor="city">City</label>
  <input
    type="text"
    id="city"
    placeholder="Enter your city"
    value={formData.city}
    onChange={handleChange}
    required
  />
</div>
<div className="form-group enrollment-year">
  <label htmlFor="enrollment-year">Enrollment Year</label>
  <input
    type="number"
    id="enrollment-year"
    placeholder="Enter your enrollment year"
    value={formData.enrollmentYear}
    onChange={handleChange}
    required
  />
</div>
<div className="form-group graduation-year">
  <label htmlFor="graduation-year">Graduation Year</label>
  <input
    type="number"
    id="graduation-year"
    placeholder="Enter your graduation year"
    value={formData.graduationYear}
    onChange={handleChange}
    required
  />
</div>
<div className="form-group major">
  <label htmlFor="major">Major</label>
  <input
    type="text"
    id="major"
    placeholder="Enter your major"
    value={formData.major}
    onChange={handleChange}
    required
  />
</div>
<div className="form-group clubs">
  <label htmlFor="clubs">Clubs Memberships</label>
  <input
    type="text"
    id="clubs"
    placeholder="Enter the clubs you are a member of"
    value={formData.clubs}
    onChange={handleChange}
    required
  />
</div>
<div className="form-group interests">
  <label htmlFor="interests">Interests</label>
  <input
    type="text"
    id="interests"
    placeholder="Enter your interests"
    value={formData.interests}
    onChange={handleChange}
    required
  />
</div>
<div className="form-group social-media">
  <label htmlFor="social-media">Social Media</label>
  <input
    type="text"
    id="social-media"
    placeholder="Enter your social media profiles"
    value={formData.socialMedia}
    onChange={handleChange}
    required
  />
</div>
<div className="form-group job-position">
  <label htmlFor="job-position">Current Job Position</label>
  <input
    type="text"
    id="job-position"
    placeholder="Enter your current job position"
    value={formData.jobPosition}
    onChange={handleChange}
    required
  />
</div>

  
        <div className="form-group submit-btn">
          <input type="submit" value="Submit" />
        </div>
      </form>
  
      {/* Thank you message */}
      <div id="thank-you-content" style={{ display: 'none', color: '#ffffff' }}>
        <h1>Thank you for filling out the form correctly 💙</h1>
      </div>
    </div>
  );
  };
  
  export default FormComponent;