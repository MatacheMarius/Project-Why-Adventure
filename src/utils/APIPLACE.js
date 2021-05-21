import axios from "axios";

const BASEURL = "https://developer.nps.gov/api/v1/places?stateCode=wa&q=hiking&api_key=JIJOalmsRLhXHd8gTsAZUfXxosfaBn4fBySwZCAl";
//https://developer.nps.gov/api/v1/places?stateCode=wa&q=hiking&api_key=JIJOalmsRLhXHd8gTsAZUfXxosfaBn4fBySwZCAl

//const QUERY = "/places?stateCode=wa"


export default {
  search: function() {
    return axios.get(BASEURL);
  }
};