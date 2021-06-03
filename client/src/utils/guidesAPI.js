import axios from "axios";

export default {
    // Gets all trips
    getGuides: function() {
      return axios.get("/api/guides");
    },
    // Gets the trip with the given id
    getGuide: function(id) {
      return axios.get("/api/guides/" + id);
    },
    // Deletes the trip with the given id
    deleteGuide: function(id) {
      return axios.delete("/api/guides/" + id);
    },
    // Saves a trip to the database
    saveGuide: function(tripData) {
      return axios.post("/api/guides", tripData);
    }
};
  