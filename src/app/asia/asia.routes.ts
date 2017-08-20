import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { AsiaComponent} from './asia.component';

const asiaRoutes: Routes = [
  { path: '' , component: AsiaComponent}

]

@NgModule({
  imports: [RouterModule.forChild(asiaRoutes)],
  exports: [RouterModule]
})

export class asiaRoutingModule {}
