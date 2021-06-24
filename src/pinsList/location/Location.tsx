import * as React from 'react';
import { VacationPlace } from '../PinsList';
import './Location.css';

export class Location extends React.Component <VacationPlace>{

  public place: VacationPlace;
  constructor( locationPlace: VacationPlace) {
    super(locationPlace);
    this.place = locationPlace;
    console.log(locationPlace)
  }
  render() {
    return <div className="place">
      <div className="place-item">country: {this.place.country}</div>
      <div className="place-item">city: {this.place.city}</div>
      <div className="place-item">startDate: {this.place.startDate}</div>
      <div className="place-item">endDate: {this.place.endDate}</div>
      <div className="place-item">pictureTaken: {this.place.pictureTaken}</div>
    </div>
  }
}