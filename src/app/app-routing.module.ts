import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddTodosComponent } from './add-todos/add-todos.component';
import { TodosComponent } from './todos/todos.component';
import { ExtraComponent } from './extra/extra.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  
  { path: '**', redirectTo: '404' },
  { path: '404', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  HeaderComponent,
  HomepageComponent,
  AboutUsComponent,
  AddTodosComponent,
  TodosComponent,
  ExtraComponent
]
