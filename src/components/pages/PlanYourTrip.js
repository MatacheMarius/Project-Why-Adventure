import React, { Component } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
// // import SearchForm from "./SearchForm";
import GuideCard from "../GuideCard";
import PlaceCard from "../PlaceCard";
import APIPLACE from "../../utils/APIPLACE";
import APIGUIDE from "../../utils/APIGUIDE";

class PlanYourTrip extends Component {
   

    state = {
      placeResults: [],
      guideResults: []
    };

    componentDidMount() {
        APIPLACE.search()
        .then(res => 
            this.setState({ 
            placeResults: res.data.data, 
        }))
        .catch(err => console.log(err));

        APIGUIDE.search()
        .then(res => 
            this.setState({ 
            guideResults: res.data.results, 
        }))
        .catch(err => console.log(err));
    };
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        {this.state.placeResults.map(result => (
                        <PlaceCard 
                            id={result.id}
                            key={result.id}
                            title={result.title}
                            // add additional properties to display here
                        />
                        ))}
                    </div>
                    <div className="col-md-4">
                        {this.state.guideResults.map((result,i) => (
                        <GuideCard 
                            id={result.id}
                            key={i}
                            firstName={result.name.first}
                            // add additional properties to display here
                        />
                        ))}
                    </div>
                    <div className="col-md-4">
                        <h2>Select your dates</h2>
                        <Calendar
                            // ref https://www.npmjs.com/package/react-calendar
                        />
                    </div>
                </div>
            </div>
        );
    };
};

export default PlanYourTrip;