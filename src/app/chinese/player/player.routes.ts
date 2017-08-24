
import { PlayerComponent} from './player.component';
import {PlayerdetailComponent} from './playerdetail/playerdetail.component';
import { PlayerListComponent} from './player-list/player-list.component';
import {NgModule} from '@angular/core';
import {CanDeactivate, RouterModule, Routes} from '@angular/router';
import { ResolveGuard} from './resolve.guard';
import {CanDeactivateGuard} from './candeactivate.guard';
const playerRoutes: Routes = [
  { path: '' , component: PlayerComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: 'list', component: PlayerListComponent},
      { path: 'detail/:id', component: PlayerdetailComponent, resolve: {detail : ResolveGuard}, canDeactivate: [CanDeactivateGuard]},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(playerRoutes)],
  exports: [RouterModule]
})

export class PlayRouting{}
