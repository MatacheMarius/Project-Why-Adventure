import axios from "axios";
require('dotenv').config();

 export const getUsers = () => {
    return axios.get("https://randomuser.me/api/?results=1&exc=login");
};

const getInfo = (env) => {

  var options = {
    method: 'GET',
    url: 'https://jonahtaylor-national-park-service-v1.p.rapidapi.com/campgrounds',
    params: {stateCode: "WA", 	limit: "9"},
    headers: {
      'x-api-key': env.api,
      'x-rapidapi-key': env.rapidapi,
      'x-rapidapi-host': env.host
    }
  }
  return axios.request(options)
  
}

export default getInfo;

