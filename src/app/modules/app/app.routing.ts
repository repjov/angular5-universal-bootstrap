//cors stuff
import { Routes, RouterModule } from '@angular/router';

//components
import { AppComponent } from '../../components/app/app.component';
import { HomeComponent } from '../../components/home/home.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'service', component: HomeComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
