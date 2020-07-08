import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import DataEntry from "./components/DataEntry";
import MapComponent from "./components/MapComponent";
import ContactForm from "./components/ContactForm";
import SurveyForm from "./components/SurveyForm";
import sendData from "./service/firebase";
import Footer from "./components/footer";

function App() {
  const [feelingWell, setFeelingWell] = useState(null);
  const feelingWellMessage = "Glad to hear that you are doing well!";
  const [surveyData, setData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [location, setLocation] = useState(null);

  const filterGeolocationData = (data) => {
    return data.results[0].geometry.location;
  };

  const editGeolocationData = (data, currentState, status) => {
    try {
      var newLocation = filterGeolocationData(data);

      currentState.address.location = newLocation;
    } catch {}

    setData(currentState);

    sendData(currentState, status, () => {});
  };

  const convertAddressToGeopoint = (data, status) => {
    const address = data.address.city + "_" + data.address.street;
    return fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCi-Pajt7VvZOrKlGjVx7EAtZ83HDMjYwE`,
      {
        method: "GET",
        headers: {},
      }
    )
      .then((r) => r.json())
      .then((j) => editGeolocationData(j, data, status));
  };

  const concatenateData = (data, status) => {
    if (location !== null) {
      data.address.location = location;
      setData(data);
      sendData(data, status, () => {});
    } else {
      convertAddressToGeopoint(data, status);
    }
  };

  const SubmittedSubtitle =
    "Stay safe and protect yourself and your loved ones!";
  const InitialIntroTitle = "Are you feeling well?";
  const Subtitle =
    "Fill out this short questionnaire and help us fight COVID-19 in Nepal";
  const InitialBottomText =
    "Most Importantly, Stay safe! Stay home! Protect your loved one and follow these guidelines:";
  const SubmittedBottomText =
    "  Thank you for filling out the form! We are using this information to coordinate help! Until then, please stay home and protect your loved ones.";
  const SubmittedTitle = "Thank you!";

  return (
    <div class="body">
      <Header />

      <div className="contents">
        {feelingWell === null ? (
          <div>
            {submitted ? (
              <DataEntry
                reset={submitted}
                resetCallback={setSubmitted}
                callback={setFeelingWell}
                title={SubmittedTitle}
                subtitle={SubmittedSubtitle}
                bottomText={SubmittedBottomText}
                currentData={surveyData}
                dataCallback={setData}
                locationCallback={setLocation}
              />
            ) : (
              <DataEntry
                callback={setFeelingWell}
                title={InitialIntroTitle}
                subtitle={Subtitle}
                bottomText={InitialBottomText}
              />
            )}

            <div
              className=" bottomContainer d-flex flex-fill  "
              style={{ height: "80vh" }}
            >
              <MapComponent
                callback={setLocation}
                hasLocation={location === null ? false : true}
              ></MapComponent>
            </div>
          </div>
        ) : (
          <div className="container-fluid contents">
            {feelingWell === true ? (
              <ContactForm
                message={feelingWellMessage}
                callback={setFeelingWell}
                submittedCallback={setSubmitted}
                dataCallback={(data) => {
                  if (location) {
                    concatenateData(data, true);
                    setSubmitted(true);
                  } else {
                    convertAddressToGeopoint(data, true);
                    setSubmitted(true);
                  }
                }} // if this is set to set data - no geolocation api is called
                currentData={surveyData}
              />
            ) : (
              <SurveyForm
                message={feelingWellMessage}
                callback={setFeelingWell}
                submittedCallback={setSubmitted}
                dataCallback={(data) => {
                  if (location) {
                    concatenateData(data, false);
                    //   setSubmitted(true)
                  } else {
                    convertAddressToGeopoint(data, false);
                    //     setSubmitted(true)
                  }
                }}
                submissionCallback={(data) => {
                  convertAddressToGeopoint(data, true);
                }}
                currentData={surveyData}
              />
            )}
          </div>
        )}
      </div>
      {feelingWell == null || feelingWell == true ? <Footer /> : null}
    </div>
  );
}

export default App;
