import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CribsService } from './../services/cribs.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  error: string;

  constructor(
    private http: Http,
    private cribsService: CribsService
  ) { }

  ngOnInit() {
    this.cribsService.getAllCribs()
      .subscribe(
        data => this.cribs = data,
        error => this.error = error.statusText
      );

      this.cribsService.newCribSubject.subscribe(
        data => this.cribs = [data, ...this.cribs] // will add new listing to the beginning of the array and will be shown as first element
        // data => this.cribs.push(data) // adds new listing to the end of the data array, will be shown at the end
      );
  }

}
