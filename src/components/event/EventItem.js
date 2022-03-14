import React, { useState } from "react";
import Event from "./Event";
const EventItem = ({
  location: { name, description, event_date, id, status },
  setUpdateEvent,
  event,
  deleteEvent,
  setAddEvent,
}) => {
  const [viewEvent, setViewEvent] = useState(false);

  return (
    <div className="location-item justify-content-between align-items-end">
      <div className="d-flex flex-column" style={{ width: "100%" }}>
        <h4>{name}</h4>
        <h5>{"Description:" + description}</h5>
        <h6>{"Event Date: " + event_date}</h6>

        {viewEvent && (
          <Event
            event={event}
            setViewEvent={setViewEvent}
            deleteEvent={deleteEvent}
            setUpdateEvent={setUpdateEvent}
            setAddEvent={setAddEvent}
          />
        )}
      </div>
      {!viewEvent && (
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => {
            setViewEvent(true);
          }}
        >
          <i className="fa fa-eye"></i>
        </button>
      )}
    </div>
  );
};

export default EventItem;
