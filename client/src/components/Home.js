import React, { Component } from 'react';
import CountDown from './CountDown.js';
import Map from './Map';
import { GoogleApiWrapper } from 'google-maps-react';

class Home extends Component {
  render() {
    return (
      <div>
        <section className="py-4">
          <div className="container text-center">
            <h2>James &amp; Rachel</h2>
            <h3>are getting married in</h3>
            <CountDown eventData="Aug 3, 2019 15:00:00 GMT-0500" />
          </div>
        </section>
        <section className="py-4">
          <div className="container text-center">
            <h2>When &amp; Where</h2>
            <p>Saturday 3rd August 2019</p>
            <p>Devonshire Terrace<br />Devonshire Square<br />London<br />EC2M 4WY</p>
            <Map google={this.props.google} />
          </div>
        </section>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.MAP_KEY,
  libraries: ['places']
})(Home);
//export default Home;