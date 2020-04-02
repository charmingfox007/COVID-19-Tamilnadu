import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import * as input from './InputData.json'

function App() {
  const [ActivePopup, SetPopup] = React.useState(null);
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body className = 'container'>
        <Map center={[11.127123, 78.656891]} zoom={6}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {input.features.map(data => (
            <Marker key={data.properties.District_Code} position={[
              data.geometry.coordinates[0],
              data.geometry.coordinates[1]
            ]} OnClick={() => SetPopup(data)} />
          ))}

          {ActivePopup && (<Popup position={[
            ActivePopup.geometry.coordinates[0],
            ActivePopup.geometry.coordinates[1]
          ]}  onClose = {() => SetPopup(null)}>
            <h4>{ActivePopup.properties.NAME}</h4>
            <h4>Total Count - {ActivePopup.properties.TotalCount}</h4>
            <h4>Active Count - {ActivePopup.properties.ActiveCount}</h4>
            <h4>Recovered - {ActivePopup.properties.Recovered}</h4>
            <h4>Deceased - {ActivePopup.properties.Deceased}</h4>
          </Popup>)}

        </Map>

      </body>
    </div>
  );
}

export default App;
