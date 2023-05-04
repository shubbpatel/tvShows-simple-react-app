import React, { useState } from "react";
import style from './styles/BookingForm.css';

export default function BookingForm({ show }) {
  const { name } = show;

  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    movie: name,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormDetails({ ...formDetails, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    sessionStorage.setItem("formDetails", JSON.stringify(formDetails));

    setFormDetails({ ...formDetails, name: "", email: "" });
    alert("ticket booked successfully");
  };

  return (
    <div className="booking-form d-flex a-center j-center">
      <h1>Book Ticket </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">name: </label>
        <input
          type="text"
          name="name"
          value={formDetails.name}
          onChange={handleChange}
        />
        <label htmlFor="">email: </label>
        <input
          type="text"
          name="email"
          value={formDetails.email}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">Book Ticket</button>
      </form>
    </div>
  );
}
