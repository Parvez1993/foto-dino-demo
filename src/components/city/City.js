import React from "react";
import LocationItem from "../location/LocationItem";

const City = ({
  city: { name, code },
  fetchEvents,
  locations,
  setCity,
  setLocations,
  setUpdateLocation,
  setAddLocation,
  deleteLocation,
  events,
  setEvents,
  setUpdateEvent,
  setAddEvent,
  deleteEvent,
  setViewEvent,
  setCurrentLocationId,
}) => {
  return (
    <div className="back">
      <div className="city d-flex flex-column my-5">
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            setCity({});
            setLocations([]);
            setAddLocation(false);
            setUpdateLocation(false);
          }}
        >
          <i className="fa fa-times"></i>
        </button>
        <h1>{name}</h1>
        <h2>{"- code: " + code}</h2>
        <h3>Places to visit</h3>
        <button
          className="btn btn-primary"
          onClick={() => {
            setAddLocation(true);
            setUpdateLocation({});
          }}
        >
          <i className="fa fa-plus"></i> Add a location
        </button>
        {locations.map((location, k) => (
          <LocationItem
            key={k}
            location={location}
            setUpdateLocation={setUpdateLocation}
            deleteLocation={deleteLocation}
            setAddLocation={setAddLocation}
            events={events}
            setEvents={setEvents}
            setUpdateEvent={setUpdateEvent}
            setAddEvent={setAddEvent}
            deleteEvent={deleteEvent}
            setViewEvent={setViewEvent}
            setCurrentLocationId={setCurrentLocationId}
            fetchEvents={fetchEvents}
          />
        ))}
      </div>
    </div>
  );
};

export default City;
