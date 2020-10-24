import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CorePipePipe } from './core-pipe.pipe';
import { CoreDriectiveDirective } from './core-driective.directive';



@NgModule({
  declarations: [HeaderComponent, CorePipePipe, CoreDriectiveDirective],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
