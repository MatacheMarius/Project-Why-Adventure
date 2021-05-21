import axios from "axios";

// set to return users with US nationality and qnt 5
const BASEURL = "https://randomuser.me/api/?nat=us&results=5";

export default {
  search: function() {
    return axios.get(BASEURL);
  }
};