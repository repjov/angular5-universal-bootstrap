//core stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//components
import { AppComponent } from './components/app';
import { HomeComponent } from './components/home';
import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';

//routing
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'lds'}),
    routing,
  ],
  providers: [], //here will be Services
  bootstrap: [AppComponent]
})
export class AppModule { }
