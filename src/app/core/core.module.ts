import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CorePipePipe } from './core-pipe.pipe';



@NgModule({
  declarations: [HeaderComponent, CorePipePipe],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
