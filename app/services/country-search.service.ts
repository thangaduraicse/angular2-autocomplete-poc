import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Country }           from '../model/country';

@Injectable()

export class CountrySearchService {

  constructor(private http: Http) {}
  search = (term: string)  => this.http.get(`app/countries/?name=${term}`).map((r: Response) => r.json().data as Country[]);

}
