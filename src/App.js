import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import data from './query';

const position = [ 6.23003500000003,-75.59372200000033]

class App extends Component {

  renderMarkers(values) {
    return values.map( value => (<Marker key={`key-${value[0]}`} position={[value[2],value[3]]}>
      <Popup>
        <div>
          <span>Fecha<br />{value[0]}</span>
          <br/>
          <span>Valor PM 2.5<br />{value[1]}</span>
        </div>
      </Popup>
    </Marker>)
   )
  }

  render() {
    const {columns, name, values } = data.results[0].series[0];

    return (
      <div className="App">
        {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            </header> */}
        <div className="App-intro">
          <Map center={position} zoom={13}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {this.renderMarkers(values)}
          </Map>
        </div>
      </div>
    );
  }
}

export default App;
