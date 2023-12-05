import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {FlipCardComponent} from "./pages/flip-card/flip-card.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: "full"},
      // {path: '', redirectTo: '/card-page', pathMatch: "full"}, // пока редирект на карточки со словами
      {path: '', component: HomePageComponent},
      {path: 'card-page', component: FlipCardComponent}
    ]
  },
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
