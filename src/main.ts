import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter,Routes} from '@angular/router';
import {PerfumesListComponent} from "./app/perfumes-list/perfumes-list.component";
import {PerfumesListItemComponent} from "./app/perfumes-list-item/perfumes-list-item.component";


const routes: Routes=[
  {path:'', redirectTo: '/perfumes', pathMatch: 'full'},
  {path: 'perfumes' , component: PerfumesListComponent},
  {path: 'perfumes/:id' , component: PerfumesListItemComponent},

]
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
