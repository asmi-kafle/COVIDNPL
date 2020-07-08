import React from "react";
import "./App.css";
import Header from "./components/Header";
import DataEntry from "./components/DataEntry";
import MapComponent from "./components/MapComponent";
import ContactForm from "./components/ContactForm";
import SurveyForm from "./components/SurveyForm";

function App() {
  return (
    <div class="container-fluid body">
      <Header />
      <div className="row"></div>
      <div className="row">
        <DataEntry />
      </div>
      <MapComponent></MapComponent>
    </div>
  );
}

export default App;
