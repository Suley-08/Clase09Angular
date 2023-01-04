import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ContentComponent,
  ]
})
export class CalculadoraModule { }
