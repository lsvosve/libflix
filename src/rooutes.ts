import { MovieListComponent } from './app/movies/movie-list.component';
import { Routes } from '@angular/router';
import { MovieDetailComponent } from './app/movie-detail/movie-detail.component';
export const appRoutes:Routes=[
{path:'movies',component:MovieListComponent},
{path:'movies/:id',component:MovieDetailComponent},
{path:'',redirectTo:'/movies',pathMatch:'full'}
]