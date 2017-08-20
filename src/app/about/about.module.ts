import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { aboutRoutingModule} from './about.routes';
import { SharedModule} from '../shared/shared/shared.module';
import { AboutIndexComponent } from './about-index/about-index.component';
import { AboutChineseComponent } from './about-chinese/about-chinese.component';
import { AboutAsiaComponent } from './about-asia/about-asia.component';
import { GetCoreComponent } from './get-core/get-core.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    aboutRoutingModule
  ],
  declarations: [AboutComponent, AboutIndexComponent, AboutChineseComponent, AboutAsiaComponent, GetCoreComponent]
})
export class AboutModule { }
