import React, {Component} from 'react';
import Select from "react-select";
import "react-select/dist/react-select.css";
import axios from 'axios';

class CountrySelect extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            countries       : [],
            country_selected : {}
        };
    }

    componentWillMount() {

        axios.get('http://35.202.88.103/category',{headers:{
            'Content-Type': 'application/json',
            'Api-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluQHJlbGVudGxlc3MuY29tIiwic3ViIjo0LCJpc3MiOiJodHRwOi8vMzUuMjAyLjg4LjEwMy91c2Vycy9sb2dpbiIsImlhdCI6MTU0MzU0MTAxNSwiZXhwIjoxNTQzNTQ0NjE1LCJuYmYiOjE1NDM1NDEwMTUsImp0aSI6IkEwZGZDN214Z0RQSjBONjUifQ.dQGKhDrcjDPM1XJ04qdRfSFdKsWX19Fw6TPVoruhe1U'
        },
            responseType: 'json'
        }).then((response) => {
            console.log(response);
        });

        /*axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
            console.log(response.data);

            let countries = [];

            response.data.forEach(function(element) {
                countries.push({
                    label:element.name,
                    value:element.numericCode
                });
            });
            this.setState({
                countries,
                country_selected : countries.find(function(element) {
                    return element.label === "Spain";
                }),
            });
        });*/
    }

    saveCountry(value) {
        this.setState({
            country_selected: this.state.countries.find(function(element) {
                return element.value === value;
            })
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <Select
                        id="countrySelect"
                        autoFocus
                        simpleValue
                        name="countrySelect"
                        options={this.state.countries}
                        value={this.state.country_selected}
                        placeholder="Seleccione un pais"
                        onChange={this.saveCountry.bind(this)}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="countrySelect">{ this.state.country_selected.label }</label>
                </div>
            </div>
        );
    }
}

export default CountrySelect;
