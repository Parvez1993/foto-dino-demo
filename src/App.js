import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Cities from "./components/city/Cities";
import CityForm from "./components/city/CityForm";
import City from "./components/city/City";
import "./App.css";
import LocationForm from "./components/location/LocationForm";
import UpdateLocation from "./components/location/UpdateLocation";
import EventForm from "./components/event/EventForm";
import UpdateEvent from "./components/event/UpdateEvent";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([{}]);
  const [city, setCity] = useState({});
  const [searchCity, setSearchCity] = useState({
    text: "",
    cities: [],
    searching: false,
  });
  const [addCity, setAddCity] = useState(false);
  const [sortType, setSortType] = useState("id");
  const [updatingCity, setUpdatingCity] = useState({});
  const [updateLocation, setUpdateLocation] = useState({});
  const [locations, setLocations] = useState([]);
  const [addLocation, setAddLocation] = useState(false);

  //////////////events//////

  //  adding current location
  const [currentLocationId, setCurrentLocationId] = useState("");

  const [updateEvent, setUpdateEvent] = useState({});
  const [events, setEvents] = useState([]);
  const [addEvent, setAddEvent] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [viewEvent, setViewEvent] = useState(false);

  useEffect(() => {
    const getCities = async () => {
      const CitiesFromServer = await fetchCities();
      setCities(CitiesFromServer);
      setLoading(false);
    };
    getCities();
  }, []);

  //City methods

  const fetchCities = async () => {
    const res = await axios.get("https://testapi.photodino.de/cities/");
    const data = await res.data;
    return data;
  };

  const createCity = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .post("https://testapi.photodino.de/cities/", formData, config)
      .then((res) => {
        const data = res.data;

        if (sortType === "id2") {
          setCities([data, ...cities]);
        } else {
          setCities([...cities, data]);
        }
      });
  };

  const updateCity = async (data, id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .put(`https://testapi.photodino.de/cities/${id}/`, data, config)
      .then((res) => {
        const data = res.data;
        setCities(
          cities.map((city) =>
            city.id === id
              ? { ...city, name: data.name, code: data.code }
              : city
          )
        );
      });
  };

  const deleteCity = async (id) => {
    await axios.delete(`https://testapi.photodino.de/cities/${id}/`);
    setCities(cities.filter((city) => city.id !== id));
  };

  //location methods

  const fetchLocations = async (cityId) => {
    await axios
      .get("https://testapi.photodino.de/locations/", {
        params: { city_id: cityId },
      })
      .then((res) => {
        const data = res.data;
        setLocations(data);
      });
  };

  const createLocation = async (formData) => {
    formData = { ...formData, city: city.id };
    console.log(formData);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .post("https://testapi.photodino.de/locations/", formData, config)
      .then((res) => {
        const data = res.data;
        setLocations([data, ...locations]);
      });
  };

  const updatingLocation = async (data, id) => {
    data = { ...data, city: city.id };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .put(`https://testapi.photodino.de/locations/${id}/`, data, config)
      .then((res) => {
        const data = res.data;
        setLocations(
          locations.map((location) => (location.id === id ? data : location))
        );
      });
  };

  const deleteLocation = async (id) => {
    await axios.delete(`https://testapi.photodino.de/locations/${id}/`);
    setLocations(locations.filter((location) => location.id !== id));
  };

  // ===========================================================add event======================================

  // ==================================event==============================
  const fetchEvents = async (locationId) => {
    await axios
      .get("https://testapi.photodino.de/events/", {
        params: { location_id: locationId },
      })
      .then((res) => {
        const data = res.data;
        setEvents(data);
      });
  };

  const createEvent = async (formData) => {
    formData = { ...formData };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .post("https://testapi.photodino.de/events/", formData, config)
      .then((res) => {
        const data = res.data;
        setEvents([data, ...events]);
      })
      .then((err) => console.log(err));
  };

  const updatingEvent = async (data, id) => {
    data = { ...data };
    console.log(data);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .put(`https://testapi.photodino.de/events/${id}/`, data, config)
      .then((res) => {
        const data = res.data;
        setEvents(events.map((event) => (event.id === id ? data : event)));
      });
  };

  const deleteEvent = async (id) => {
    await axios.delete(`https://testapi.photodino.de/events/${id}/`);
    setEvents(events.filter((event) => event.id !== id));
  };
  console.log(currentLocationId);

  return (
    <div className="App">
      <Fragment>
        <Navbar
          setSortType={setSortType}
          searchCity={searchCity}
          setSearchCity={setSearchCity}
          cities={cities}
          setAddCity={setAddCity}
          setCities={setCities}
        />
        {addCity && (
          <CityForm
            createCity={createCity}
            updatingCity={updatingCity}
            setUpdatingCity={setUpdatingCity}
            updateCity={updateCity}
            setAddCity={setAddCity}
          />
        )}
        <div className="d-flex flex-column">
          {addLocation && (
            <LocationForm
              createLocation={createLocation}
              setAddLocation={setAddLocation}
            />
          )}
          {updateLocation.id && (
            <UpdateLocation
              updateLocation={updateLocation}
              updatingLocation={updatingLocation}
              setUpdateLocation={setUpdateLocation}
            />
          )}
        </div>
        <div className="d-flex flex-column">
          {addEvent && (
            <EventForm
              currentLocationId={currentLocationId}
              createEvent={createEvent}
              setAddEvent={setAddEvent}
            />
          )}
          {updateEvent.id && (
            <UpdateEvent
              updateEvent={updateEvent}
              updatingEvent={updatingEvent}
              setUpdateEvent={setUpdateEvent}
            />
          )}
        </div>
        <div className="justify-content-center">
          {/* TODO: My Edits  adding addEvent*/}

          {loading ? (
            <img
              className="mx-auto"
              src="https://www.icegif.com/wp-content/uploads/loading-icegif-1.gif"
              alt="loading"
            ></img>
          ) : (
            !addLocation &&
            !updateLocation.id &&
            !addCity &&
            !addEvent &&
            !updateEvent.id && (
              <Cities
                cities={searchCity.searching ? searchCity.cities : cities}
                deleteCity={deleteCity}
                setUpdatingCity={setUpdatingCity}
                fetchLocations={fetchLocations}
                setCity={setCity}
                setAddCity={setAddCity}
                searchCity={searchCity}
                setSearchCity={setSearchCity}
                fetchEvents={fetchEvents}
              />
            )
          )}

          {/* TODO: My Edits  adding addEvent*/}

          {city.id &&
            !addEvent &&
            !addLocation &&
            !updateLocation.id &&
            !updateEvent.id && (
              <City
                city={city}
                locations={locations}
                setCity={setCity}
                setLocations={setLocations}
                setUpdateLocation={setUpdateLocation}
                setAddLocation={setAddLocation}
                deleteLocation={deleteLocation}
                events={events}
                fetchEvents={fetchEvents}
                setEvents={setEvents}
                setUpdateEvent={setUpdateEvent}
                setAddEvent={setAddEvent}
                deleteEvent={deleteEvent}
                setViewEvent={setViewEvent}
                setCurrentLocationId={setCurrentLocationId}
              />
            )}

          {city.id &&
            !addEvent &&
            !addLocation &&
            !updateLocation.id &&
            !updateEvent.id && (
              <City
                city={city}
                locations={locations}
                setCity={setCity}
                setLocations={setLocations}
                setUpdateLocation={setUpdateLocation}
                setAddLocation={setAddLocation}
                deleteLocation={deleteLocation}
                events={events}
                setEvents={setEvents}
                setUpdateEvent={setUpdateEvent}
                setAddEvent={setAddEvent}
                deleteEvent={deleteEvent}
                setViewEvent={setViewEvent}
                setCurrentLocationId={setCurrentLocationId}
                fetchEvents={fetchEvents}
              />
            )}
        </div>{" "}
      </Fragment>
    </div>
  );
};

export default App;
