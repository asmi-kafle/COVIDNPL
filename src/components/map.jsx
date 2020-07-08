import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";
import "../App.css";
import React, { Component } from "react";
import firebase from "../config.js";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addresses: [{ lat: null, lng: null }],
      loc_x: 0,
      loc_y: 0,
      locRendered: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      redirect: false,
      redirectId: 0,
    };
  }
  getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
  };
  showPosition = (position) => {
    this.setState({
      loc_x: position.coords.latitude,
      loc_y: position.coords.longitude,
      locRendered: true,
    });
    this.props.callback({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };
  componentWillMount() {
    if (!this.props.location) {
      this.getUserLocation();
    }
  }

  componentDidMount() {
    var addresses = [];
    var document = {};
    let ref = firebase.firestore().collection("Users").doc("mapCoord");
    let query = ref
      .get()
      .then((doc) => {
        if (doc.exists) {
          document = doc.data();
        } else {
        }
        const keys = Object.keys(document);
        const values = Object.values(document);
        values.forEach((item) => {
          if (item.location && item.location.lat) {
            addresses.push(item.location);
          }
        });
        this.setState({ addresses: addresses });
      })
      .catch((err) => {});
  }

  render() {
    return (
      <Map
        google={this.props.google}
        disableDefaultUI={false}
        zoom={7}
        style={mapStyles}
        initialCenter={{ lat: 28.4764, lng: 84.6897 }}
      >
        {this.state.addresses.map((address, index) => {
          return (
            <Marker
              onClick={this.onMarkerClick}
              data={address}
              key={index}
              id={index}
              position={{ lat: address.lat, lng: address.lng }}
              icon={{
                path: this.props.google.maps.SymbolPath.CIRCLE,
                fillColor: "red",
                fillOpacity: 0.8,
                scale: 8,
                strokeColor: "white",
                strokeWeight: 1,
              }}
            />
          );
        })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <span>{"Reported Symptoms"}</span>
          </div>
        </InfoWindow>
      </Map>
    );
  }

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props.data,
      activeMarker: marker,
      showingInfoWindow: true,
      redirect: false,
    });
  };
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCi-Pajt7VvZOrKlGjVx7EAtZ83HDMjYwE",
})(MapContainer);
