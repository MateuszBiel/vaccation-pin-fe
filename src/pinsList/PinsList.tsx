
import * as React from 'react';
import { Location } from './location/Location';
import './PinsList.css';

export class PinsList extends React.Component {
  public vacationList: VacationPlace[] = [
    {
      id: 1,
      country: 'Greece',
      city: 'nisos kriti',
      startDate: '23.08.2018',
      endDate: '29.08.2018',
      pictureTaken: 200
    },
    {
      id: 2,
      country: 'Bulgary',
      city: 'Warna',
      startDate: '13.09.2019',
      endDate: '20.089.2019',
      pictureTaken: 437
    },
    {
      id: 3,
      country: 'Bulgary',
      city: 'Nesebar',
      startDate: '8.08.2020',
      endDate: '15.08.2020',
      pictureTaken: 127
    },
  ];
  public placeList = this.vacationList.map((item) =>
    <Location key={item.id} {...item}></Location>
  );
  render() {
    return <div className="vacations">{this.placeList}</div>;
  }
}

export interface VacationPlace {
  id: number;
  country: string;
  city: string;
  startDate: string;
  endDate: string;
  pictureTaken: number;
}