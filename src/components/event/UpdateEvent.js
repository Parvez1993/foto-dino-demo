import React, { useEffect, useState } from "react";
const UpdateEvent = ({ updateEvent, updatingEvent, setUpdateEvent }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    event_date: "",
    status: "Available",
  });

  const handleDateChange = (e) => {
    let newdate = e.target.value.split("/").reverse().join("-");
    setFormData({ ...formData, [e.target.name]: newdate });
  };

  useEffect(() => {
    setFormData({
      name: updateEvent.name ? updateEvent.name : "",
      description: updateEvent.description ? updateEvent.description : "",
      event_date: updateEvent.event_date ? updateEvent.event_date : "",
      status: updateEvent.status ? updateEvent.status : "",
      ...updateEvent,
    });
  }, [updateEvent]);

  const { name, description, event_date, status } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
      alert("Please add a start date");
      return;
    }

    setUpdateEvent({});
    updatingEvent(formData, updateEvent.id);
  };

  return (
    <div className="p-5 d-flex flex-column location-form">
      <div className="d-flex justify-content-between">
        <h2>Update Event</h2>
        <button
          className="btn btn-danger"
          onClick={() => setUpdateEvent(false)}
        >
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
            value={event_date}
            onChange={handleDateChange}
          />
        </div>

        <div className="mb-3 d-flex flex-column">
          <label htmlFor="status" className="form-label">
            Status
          </label>
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

export default UpdateEvent;
