import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Map extends Component {

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const maps = google.maps;
      const mapsRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapsRef);
      const mapConfig = Object.assign({}, {
        center: { lat: 51.5170906, lng: -0.0781839 },
        zoom: 18,
        gestureHandling: 'cooperative',
        mapTypeId: 'roadmap'
      });

      this.map = new maps.Map(node, mapConfig);

      new google.maps.Marker({
        position: {
          lat: 51.5170906,
          lng: -0.0781839 
        },
        map: this.map,
        title: 'Devonshire Terrace'
      })
    }
  }

  render() {
    const style = {
      width: '100%',
      height: '600px'
    }

    return (
      <div ref="map" style={style}>map to go here</div>
    );
  }
}

export default Map;