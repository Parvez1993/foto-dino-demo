/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

const Location = ({
  location: { email, phone, postal_code, id },
  setViewLocation,
  deleteLocation,
  setUpdateLocation,
  location,
  setAddLocation,
  events,
  setEvents,
  setUpdateEvent,
  setAddEvent,
  deleteEvent,
  setViewEvent,
  setCurrentLocationId,
  fetchEvents,
}) => {
  useEffect(() => {
    fetchEvents(location.id);
  }, [location.id]);

  console.log(events);
  return (
    <>
      <h6>{"Email: " + email}</h6>
      <h6>{"Phone: " + phone}</h6>
      <h6>{"Postal Code: " + postal_code}</h6>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed bg-primary text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Events
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              {events.length > 0 ? (
                <div className="row">
                  {events.map((event, id) => {
                    return (
                      <>
                        {" "}
                        <div
                          key={id}
                          className="col-12 shadow border border-dark my-2 border-0 rounded p-1 my"
                        >
                          <div className="d-flex flex-column p-3">
                            <h6>{"Name: " + event.name}</h6>
                            <h6>{"Description: " + event.description}</h6>
                            <h6>{"Event Date: " + event.event_date}</h6>
                            <div className="my-2">
                              {" "}
                              {event.status === "Available" && (
                                <h6>
                                  <i
                                    className="fa fa-circle"
                                    style={{ color: "green" }}
                                  ></i>{" "}
                                  Available
                                </h6>
                              )}
                              {event.status === "Scheduled" && (
                                <h6>
                                  <i
                                    className="fa fa-circle"
                                    style={{ color: "yellow" }}
                                  ></i>{" "}
                                  Scheduled
                                </h6>
                              )}
                              {event.status === "Cancelled" && (
                                <h6>
                                  <i
                                    className="fa fa-circle"
                                    style={{ color: "red" }}
                                  ></i>{" "}
                                  Cancelled
                                </h6>
                              )}
                              {event.status === "Complete" && (
                                <h6>
                                  <i
                                    className="fa fa-circle"
                                    style={{ color: "blue" }}
                                  ></i>{" "}
                                  Complete
                                </h6>
                              )}
                            </div>
                            <div>
                              <button
                                className="btn btn-outline-warning btn-sm"
                                style={{ width: "40px", marginLeft: "auto" }}
                                onClick={() => {
                                  setAddEvent(false);
                                  setUpdateEvent({ ...event, id: event.id });
                                  setCurrentLocationId(location.id);
                                }}
                              >
                                <i className="fa fa-edit"></i>
                              </button>
                              <button
                                className="btn btn-outline-danger btn-sm mx-1"
                                style={{ width: "40px" }}
                                onClick={() => deleteEvent(event.id)}
                              >
                                <i className="fa fa-trash"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              ) : (
                <div className="alert alert-danger" role="alert">
                  There is no events happening
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "auto" }} className="my-2">
        <button
          className="btn btn-outline-warning btn-sm"
          style={{ width: "40px" }}
          onClick={() => {
            setUpdateLocation(location);
            setAddLocation(false);
          }}
        >
          <i className="fa fa-edit"></i>
        </button>
        <button
          className="btn btn-outline-danger btn-sm mx-1"
          style={{ width: "40px" }}
          onClick={() => deleteLocation(id)}
        >
          <i className="fa fa-trash"></i>
        </button>
        <button
          className="btn btn-outline-secondary btn-sm"
          style={{ width: "40px" }}
          onClick={() => setAddEvent(false)}
        >
          <i className="fa fa-angle-up"></i>
        </button>{" "}
        <button
          className="btn btn-outline-secondary btn-sm w-50 mx-1"
          style={{ width: "40px" }}
          onClick={() => {
            setAddEvent(true);
            setUpdateEvent({});
            setCurrentLocationId(location.id);
          }}
        >
          Create Event
        </button>{" "}
      </div>
    </>
  );
};

export default Location;

// <button
//                               className="btn btn-outline-warning btn-sm"
//                               style={{ width: "40px", marginLeft: "auto" }}
//                               onClick={() => {
//                                 setAddEvent(false);
//                                 setUpdateEvent({ ...event, id: event.id });
//                                 setCurrentLocationId(location.id);
//                               }}
//                             >
//                               <i className="fa fa-edit"></i>
//                             </button>
