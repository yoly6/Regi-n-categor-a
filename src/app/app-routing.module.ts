import { NgModule } from '@angular/core';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import {RouterModule, Routes} from '@angular/router'
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
//rutas

const routes: Routes= [
  {
    path:'',
    component:PorPaisComponent,
    pathMatch:'full'

  },
  {
    path:'region',
    component:PorRegionComponent,
    pathMatch:'full'

  },
  {
    path:'capital',
    component:PorCapitalComponent,
    pathMatch:'full'

  },
  {
    path:'pais/:id',
    component:VerPaisComponent,
    pathMatch:'full'

  },
  {
    path:'**',
    redirectTo:''

  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
