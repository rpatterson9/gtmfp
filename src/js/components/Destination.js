import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import BlackBar from './BlackBar';
import SearchBar from './SearchBar';
import LOCATIONS from '../data/LOCATIONS';
import '../../styles/OriginDest.css';

function Destination (props) {
  let destination = props.destination
  let newArray = []

  for (var i = 0; i < LOCATIONS.length; i++) {
    let location = LOCATIONS[i]
    if (props.clickedOrigin === 'Grand Central Terminal' && location === 'Penn Station') {
      continue
    } else if (props.clickedOrigin === 'Penn Station' && location === 'Grand Central Terminal') {
      continue
    } else if (props.clickedOrigin === location) {
      continue
    } else if(location.slice(0, destination.length).toLowerCase() === destination.toLowerCase() && !newArray.includes(location)) {
      newArray.push(location)
    }
  }

  let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let loc = newArray.map( location => {
    if (alpha.includes(location)) {
      return (
        <div className='alpha'>
          <div className='letter'>{location}</div>
        </div>
      )
    } else if (location === '.') {
      return
    } else if (location === 'Grand Central Terminal' || location === 'Penn Station') {
      return (
        <div className="location-list-blah" onClick={props.handleClickedDestination}>
          <Link to="/ticket-type">
            <div className="location-each" id={location}>{location.toUpperCase()}<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
          </Link>
        </div>
      )
    } else {
      return (
        <div className="location-list-blah" onClick={props.handleClickedDestination}>
          <Link to="/ticket-type">
            <div className="location-each" id={location}>{location}<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
          </Link>
        </div>
      )
    }
  })

  return (
    <div className='test'>
      <div className="header-container">
        <Header
          headerTitle='Select Destination Station'
          previousLink='/origin'
        />
        <BlackBar
          yellowWidth='20%'
        />
        <div className="origin-destination">
          <div className="origin-destination-third">{props.clickedOrigin}</div>
          <div className="origin-destination-middle fa fa-arrow-right" id="arrow-right" style={{fontSize: "1em", color: "white", fontWeight: "300"}}></div>
          <div className="origin-destination-third"></div>
        </div>
        <SearchBar
          handleLocation={props.handleDestination}
          origin={props.origin}
          handleClickedOrigin={props.handleClickedOrigin}
        />
      </div>
      <div className="location-list-wrapper-destination animated slideInRight">
        <div className="location-list">
          {loc}
        </div>
      </div>
    </div>
  )
}

export default Destination
