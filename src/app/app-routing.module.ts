import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from './component/home/home.component';
import { MovieComponent } from './component/movie/movie.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'movie', component: MovieComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent },
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
