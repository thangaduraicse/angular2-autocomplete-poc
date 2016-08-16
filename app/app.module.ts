import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './memory/in-memory-data.service';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import { AutoCompleteComponent }  from './components/autocomplete.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    AutoCompleteComponent
  ],
  providers: [
    { provide: XHRBackend, useClass: InMemoryBackendService },
    { provide: SEED_DATA,  useClass: InMemoryDataService }
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}
