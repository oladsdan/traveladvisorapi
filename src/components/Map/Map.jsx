import React from 'react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOutlinedicon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import useStyles from './styles.js'; // we call it as a hook
import 'leaflet/dist/leaflet.css';


const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)'); // would be set to false if mobile wdith is larger than 600px

  const coordinates ={ lat : 51.0, lng: -0.09};
  

  return (
    
    <div className={classes.mapContainer}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: ""}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""} //this is for when you click something on the map
      >
        
      </GoogleMapReact> */}
        <MapContainer 
          center={coordinates} 
          zoom={13} 
          style={{height: "100vh"}}
          options = {""}
          onChange = {""}
          onChildClick={""}

          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coordinates}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
        </MapContainer>
    </div>
  )
}

export default Map