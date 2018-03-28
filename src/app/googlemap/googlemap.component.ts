import {Component, OnInit} from '@angular/core';
import {Company} from '../companies';
import {COMPANIES} from '../mock-companies';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
  companies = COMPANIES;
  userSettings = {};
  isChosed: boolean = false;

  autoCompleteCallback1(selectedData: any) {
    this.isChosed = true;
    console.log(selectedData);
    console.log(selectedData.data.geometry.location);
    // console.log(selectedData.data.geometry.location.lat);
    var lat1 = selectedData.data.geometry.location.lat;
    var lon1 = selectedData.data.geometry.location.lng;
    // console.log(lat1, lon1);
    // this.companies.forEach((company) => {
    //   console.log(company);
    //   let lat2 = company.lat;
    //   let lon2 = company.lng;
    //   console.log(this.distance(lat1, lon1, lat2, lon2, 'K'));
    //   let dist = this.distance(lat1, lon1, lat2, lon2, 'K');
    //   this.companies[company].distance = dist;
    // });
    for (let i = 0; i < this.companies.length; i++) {

      let lat2 = this.companies[i].lat;
      let lon2 = this.companies[i].lng;
      this.companies[i].distance = Math.round(this.distance(lat1, lon1, lat2, lon2, 'K'));
      console.log(this.companies[i]);
    }

    // this.distance(lat1, lon1, this.companies., lon2);


  }

  constructor() {
  }

  ngOnInit() {


  }

  distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var radlon1 = Math.PI * lon1 / 180;
    var radlon2 = Math.PI * lon2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == 'K') {
      dist = dist * 1.609344;
    }
    if (unit == 'N') {
      dist = dist * 0.8684;
    }
    return dist;
  }

}
