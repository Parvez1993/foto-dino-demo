import React, { useState } from "react";
import moment from "moment";

const EventForm = ({ createEvent, setAddEvent, currentLocationId }) => {
  const [date, setDate] = useState("");

  const [formData, setFormData] = useState({
    location: currentLocationId,
    name: "",
    description: "",
    event_date: "",
    status: "Available",
    created: moment().format(),
  });

  // const [event_date, setEventDate] = useState(new Date());

  const { name, description, status, event_date } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleDateChange = (e) => {
    let newdate = e.target.value.split("/").reverse().join("-");
    setFormData({ ...formData, [e.target.name]: newdate });
    setDate(newdate);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please add a name");
      return;
    }
    if (!description) {
      alert("Please add a description");
      return;
    }
    if (!event_date) {
      alert("Please add a event date");
      return;
    }
    if (!status) {
      alert("Please add a status");
      return;
    }

    console.log(formData);
    createEvent(formData);
    setAddEvent(false);
  };

  return (
    <div className="p-5 d-flex flex-column location-form">
      <div className="d-flex justify-content-between">
        <h2>Create a new Event</h2>
        <button className="btn btn-danger" onClick={() => setAddEvent(false)}>
          <i className="fa fa-times"></i>
        </button>
      </div>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3 d-flex flex-column">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="Name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="mb-3 d-flex flex-column">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="description"
            name="description"
            value={description}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="mb-3 d-flex flex-column">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="date"
            name="event_date"
            value={date}
            onChange={handleDateChange}
          />
        </div>

        <div className="mb-3 d-flex flex-column">
          <label htmlFor="status">Status</label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="status"
            name="status"
            value={status}
            onChange={(e) => onChange(e)}
          >
            <option selected value="Available">
              Available
            </option>
            <option value="Scheduled">Scheduled</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Complete">Complete</option>
          </select>
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventForm;
