import React, { useEffect } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "./actions";

const App = (props) => {
  const countries = useSelector((state) => state.countries);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div className="App">
      <h1>Get Data From Api</h1>
      <h2>React Router</h2>
      {isLoading ? (
        <p>LOADING...</p>
      ) : (
        countries.map((country) => {
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

export default App;
