import React from "react";

const Event = ({
  location: { name, description, event_date, id },
  setViewEvent,
  deleteEvent,
  setUpdateEvent,
  event,
  setAddEvent,
}) => {
  return (
    <>
      <h6>{"Event Name: " + name}</h6>
      <h6>{"Description: " + description}</h6>
      <h6>{"Event Date " + event_date}</h6>
      <div style={{ marginLeft: "auto" }}>
        <button
          className="btn btn-outline-warning btn-sm"
          style={{ width: "40px" }}
          onClick={() => {
            setUpdateEvent(event);
            setAddEvent(false);
          }}
        >
          <i className="fa fa-edit"></i>
        </button>
        <button
          className="btn btn-outline-danger btn-sm mx-1"
          style={{ width: "40px" }}
          onClick={() => deleteEvent(id)}
        >
          <i className="fa fa-trash"></i>
        </button>
        <button
          className="btn btn-outline-secondary btn-sm"
          style={{ width: "40px" }}
          onClick={() => setViewEvent(false)}
        >
          <i className="fa fa-angle-up"></i>
        </button>{" "}
      </div>
    </>
  );
};

export default Event;
