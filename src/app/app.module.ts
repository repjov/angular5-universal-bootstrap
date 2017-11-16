//core stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//components
import { AppComponent } from './components/app';
import { HomeComponent } from './components/home';

//routing
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'lds'}),
    routing,
  ],
  providers: [], //here will be Services
  bootstrap: [AppComponent]
})
export class AppModule { }
