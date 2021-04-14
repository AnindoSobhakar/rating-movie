import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ResultComponent } from './components/result/result.component';
import { SearchmovieComponent } from './components/searchmovie/searchmovie.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'searchmovie', component: SearchmovieComponent},
  { path: 'result/:id', component: ResultComponent},
  { path: 'favourite', component:FavouriteComponent},
  { path: '**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
