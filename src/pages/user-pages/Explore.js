import React from "react";
import UserLayout from "../../components/layout/user-layout/UserLayout";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../service/api";

function Map() {
  const [fetchedFarms, setFetchedFarms] = useState([]);
  const history = useHistory();

  const allFarms = () => {
    api
      .getCustomerFarms()
      .then((response) => {
        console.log(response);
        setFetchedFarms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(fetchedFarms);
  useEffect(() => {
    allFarms();
  }, [history]);

  const [selectedFarm, setSelectedFarm] = useState(null);

  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 34.2096, lng: 35.8779 }}>
      {fetchedFarms.map((farm) => (
        <Marker
          key={farm.id}
          position={{ lat: parseFloat(farm.lat), lng: parseFloat(farm.lng) }}
          onClick={() => {
            setSelectedFarm(farm);
            console.log(farm);
          }}
        />
      ))}

      {selectedFarm && (
        <InfoWindow
          position={{
            lat: parseFloat(selectedFarm.lat),
            lng: parseFloat(selectedFarm.lng),
          }}
          onCloseClick={() => {
            setSelectedFarm(null);
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h4 style={{ padding: "10 5" }}>{selectedFarm.farm_name}</h4>
            <p>{selectedFarm.description}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function Explore() {
  return (
    <UserLayout>
      <Grid container>
        <div style={{ width: "100%", height: "80vh" }}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBPaQV4EkPfwQAS4koz4V1eMzNXH9pzKCM`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </div>
      </Grid>
    </UserLayout>
  );
}

export default Explore;
