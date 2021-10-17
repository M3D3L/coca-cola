import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatSelectModule} from '@angular/material/select';


const MaterialComponents =[
  MatSliderModule,
  MatExpansionModule,
  MatInputModule,
  MatSelectModule,
  IvyCarouselModule
];


@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {

}
