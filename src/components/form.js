import React, { useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './form1.css';

function Form() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    placeName: '',
    type: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

 const handleOnSubmit = (event) => {
  event.preventDefault();
  const existingData = JSON.parse(localStorage.getItem('placesList')) || [];
  const updatedData = [...existingData, formData];
  localStorage.setItem('placesList', JSON.stringify(updatedData));

  setFormData({
    placeName: '',
    type: '',
    address: ''
  });
};

  const handleGoToPlaces = () => {
    navigate('/places');
  };
   return (
    <div className="form-wrapper">
        <h1>
            hello, add your place:)
        </h1>
        <br/>
      <form >
        <FormGroup>
          <label>Place Name</label>
          <input
            type="text" name="placeName" maxLength={25} value={formData.placeName} onChange={handleChange} required/>
        </FormGroup>

        <FormGroup>
          <label>Type</label>
          <select name="type" value={formData.type} onChange={handleChange} required>
            <option value="" disabled>Choose type</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Hotel">Hotel</option>
            <option value="Park">Park</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>Address</label>
          <input
            type="text"name="address"value={formData.address} onChange={handleChange} required
          />
        </FormGroup>

        <button type="submit" onClick= {handleOnSubmit}>
            Submit
        </button>

        <button type="button" onClick={handleGoToPlaces}>
          Places
        </button>
      </form>
    </div>
  );
}

export default Form;