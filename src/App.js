import React, { useEffect } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { getCountries } from "./actions";

const App = (props) => {
  useEffect(() => {
    props.getCountries();
  }, []);

  return (
    <div className="App">
      <h1>Get Data From Api</h1>
      <h2>React Router</h2>
      {props.isLoading ? (
        <p>LOADING...</p>
      ) : (
        props.countries.map((country) => {
          return (
            <div className="div1" key={country.name}>
              <h3>{country.name}</h3>
              <h4>{country.capital}</h4>
              <p>
                <img
                  src={country.flag}
                  alt={country.name}
                  style={{ width: "100px" }}
                />
              </p>
            </div>
          );
        })
      )}
    </div>
  );
};

const mapStoreToApp = (state) => {
  return {
    countries: state.countries,
    isLoading: state.isLoading
  };
};

export default connect(mapStoreToApp, { getCountries })(App);
