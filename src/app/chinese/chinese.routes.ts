import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { ChineseComponent} from './chinese.component';
import { ChineseIndexComponent} from './chinese-index/chinese-index.component';

const chineseRoutes: Routes = [
  { path: '' , component: ChineseComponent,
  children: [
    { path: '', redirectTo: 'index', pathMatch: 'full'},
    { path: 'index', component: ChineseIndexComponent},
    { path: 'player', loadChildren: './player/player.module#PlayerModule'},
    { path: 'addplayer', loadChildren: './addplay/addplay.module#AddplayModule'}
  ]}

]

@NgModule({
  imports: [RouterModule.forChild(chineseRoutes)],
  exports: [RouterModule]
})

export class ChineseRoutingModule {}
