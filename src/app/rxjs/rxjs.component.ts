import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { tap, take, share, filter, map, debounceTime } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import {CustomValidators} from '../app-shared/custom-validators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  private searchFormControl: FormControl;
  private results: Array<string>;

  private resultsObs: Observable<Array<string>>;

  constructor(private httpClient: HttpClient) {

    let obs = interval(1000)
      .pipe(
        take(10),
        tap(n => console.log("tap: ", n)),
        filter(n => n % 2 === 0),
        map(n => n * n),
        share()
      );
    // obs.subscribe(r => console.log("Sub #1", r));
    // obs.subscribe(r => console.log("Sub #2", r));                
  }

  ngOnInit() {

    this.searchFormControl = new FormControl("",
      [Validators.required, Validators.minLength(3), CustomValidators.ForbiddenNames(["admin", "manager"])], []);

    this.searchFormControl
      .valueChanges
      .pipe(
        debounceTime(1000),
        filter(value => this.searchFormControl.valid)
      )
      .subscribe(value => {
        console.log(value);

        const url = "https://en.wikipedia.org/w/api.php";
        const httpParams
          = new HttpParams()
            .set("action", "opensearch")
            .set("format", "json")
            .set("limit", "15")
            .set("origin", "*")
            .set("search", value);

        // this.httpClient
        //     .get(url, {params: httpParams, observe: 'response'})
        //     .subscribe((resp) => {
        //       console.log(resp);
        //     }, () => {});

        this.httpClient
          .get(url, { params: httpParams, observe: 'body' })
          .pipe(
            map(data => data[1]),
          )
          .subscribe((data) => {
            console.log(data);
            this.results = data;
          }, () => { });
          

      });



      this.searchFormControl
      .valueChanges
      .pipe(
        debounceTime(1000),
        filter(value => this.searchFormControl.valid)
      )
      .subscribe(value => {
        

        const url = "https://en.wikipedia.org/w/api.php";
        const httpParams
          = new HttpParams()
            .set("action", "opensearch")
            .set("format", "json")
            .set("limit", "15")
            .set("origin", "*")
            .set("search", value);

          this.resultsObs =  this.httpClient
                                .get(url, { params: httpParams, observe: 'body' })
                                .pipe(
                                  map(data => data[1]),
                                );
            
          

      })
  }

}
