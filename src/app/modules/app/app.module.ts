//core stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//components
import { AppComponent } from '../../components/app';

//Pages
import { HomeComponent } from '../../components/pages/home';

//shared layouts
import { HeaderComponent } from '../../components/layouts/header';
import { FooterComponent } from '../../components/layouts/footer';

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
