import React, { useState } from "react";

const AppointmentForm = ({ onBookAppointment }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookAppointment({ date, time });
    setDate("");
    setTime("");
  };

  return (
    <div className="appointment-form card">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={handleTimeChange}
            required
          />
        </div>
        <button className="btn" type="submit">
          Book
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
