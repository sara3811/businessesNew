import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import  {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule}  from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';



const modules = [
  MatMenuModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatToolbarModule,
  MatIconModule,
  MatStepperModule,
  MatSelectModule,
  MatSidenavModule,
  MatListModule,
  MatExpansionModule,
  MatCheckboxModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
