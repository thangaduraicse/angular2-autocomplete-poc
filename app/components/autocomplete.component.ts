import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { CountrySearchService } from '../services/country-search.service';
import { Country } from '../model/country';

@Component({
  selector: 'autocomplete',
  template: `
    <div id="autocomplete_component" class="container">
      <h4>Auto Complete</h4>
      <p>Search by Country Name</p>
      <div class="row">
        <div class="input-field col m6 s12">
          <input #countryBox id="country" type="text" class="validate filter-input" (keyup)="search(countryBox.value)"/>
          <label for="country"></label>
        </div>
      </div>
      <div class="row">
        <div class="col m6 s12 autocomplete">
          <div *ngFor="let country of countries | async"
            (click)="select(country)" class="search-result">{{country.name}}</div>
        </div>
      </div>
    </div>
  `,
  providers: [CountrySearchService]
})

export class AutoCompleteComponent implements OnInit {

  countries: Observable<Country[]>;

  private searchTerms = new Subject<string>();

  constructor(private countrySearchService: CountrySearchService, private router: Router) {}

  // Push a search term into the observable stream.
  search = (term: string) => this.searchTerms.next(term);
  // select = (country: Country) => "thangadurai"
  select(country: Country) {
    console.log(country);
    console.log(this);
  }

  ngOnInit() {
    this.countries = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.countrySearchService.search(term)
        // or the observable of empty countries if no search term
        : Observable.of<Country[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Country[]>([]);
      });
  }
}
