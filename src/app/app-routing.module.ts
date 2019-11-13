import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { PersonalPageComponent } from './components/authors/personal-page/personal-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  { path: 'posts', component: NewsComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'authors/:id', component: PersonalPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
