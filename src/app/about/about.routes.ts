import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about.component';
import {NgModule} from '@angular/core';
import {AboutIndexComponent} from './about-index/about-index.component';
import {AboutChineseComponent} from './about-chinese/about-chinese.component';
import {AboutAsiaComponent} from './about-asia/about-asia.component';
import {GetCoreComponent} from './get-core/get-core.component';

const aboutRoutes: Routes = [
  { path: '', component: AboutComponent,
  children: [
    { path: '', redirectTo: 'index', pathMatch: 'full'},
    { path: 'index', component: AboutIndexComponent},
    { path: 'chinese', component: AboutChineseComponent},
    { path: 'asia', component: AboutAsiaComponent},
    { path: 'getcore', component: GetCoreComponent},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(aboutRoutes)],
  exports: [RouterModule]
})

export class aboutRoutingModule {}
