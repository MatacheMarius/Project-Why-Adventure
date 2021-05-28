import axios from "axios";

 export const getUsers = () => {
    return axios.get("https://randomuser.me/api/?results=1&exc=login");
};

const getInfo = () => {

  var options = {
    method: 'GET',
    url: 'https://jonahtaylor-national-park-service-v1.p.rapidapi.com/campgrounds',
    params: {stateCode: "WA", 	limit: "9"},
    headers: {
      'x-api-key': 'CDQqUnod33sYMHzDwqRNsw2lRXMNRdwLZUpiSoJd',
      'x-rapidapi-key': 'f698202c65msh9632fce62056887p1835f7jsn64c8103bb7d3',
      'x-rapidapi-host': 'jonahtaylor-national-park-service-v1.p.rapidapi.com'
    }
  }
  return axios.request(options)
  
}

export default getInfo;