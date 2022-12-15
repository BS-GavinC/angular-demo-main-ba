import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoBannerComponent } from './demo/demo-banner/demo-banner.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { ExerciceBannerComponent } from './exercice/exercice-banner/exercice-banner.component';
import { Exercice1Component } from './exercice/exercice1/exercice1.component';

const routes: Routes = [
  {path : 'demo', component : DemoBannerComponent, children : [
    {path : 'demo1', component : Demo1Component}
  ] },
  {path : 'exercice', component : ExerciceBannerComponent, children : [
    {path : 'exercice1', component : Exercice1Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
