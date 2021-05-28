import axios from "axios";

export default {
    // Gets all trips
    getTrips: function() {
      return axios.get("/api/trips");
    },
    // Gets the trip with the given id
    getTrip: function(id) {
      return axios.get("/api/trips/" + id);
    },
    // Deletes the trip with the given id
    deleteTrip: function(id) {
      return axios.delete("/api/trips/" + id);
    },
    // Saves a trip to the database
    saveTrip: function(tripData) {
      return axios.post("/api/trips", tripData);
    }
};
  