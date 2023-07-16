import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './modules/home/pages/home/home-component/home-component.component';
import { Home2ComponentsComponent } from './conversao/home2/pages/home2/home2-components/home2-components.component';

const routes: Routes = [
  {path: "consulta", component: HomeComponentComponent},
  {path: "conversao", component: Home2ComponentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
