import {RouterModule, Routes} from '@angular/router';
import {AddplayComponent} from './addplay.component';
import {NgModule} from '@angular/core';

const addplayRoutes: Routes = [
  { path: '', component: AddplayComponent}
]
@NgModule({
  imports: [RouterModule.forChild(addplayRoutes)],
  exports: [RouterModule]
})

export class addplayRoutingModule {}
