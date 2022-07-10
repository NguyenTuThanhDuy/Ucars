import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    SearchComponent,
    ViewComponent,
    ViewDetailComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    MatCardModule,
    MatListModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class CarsModule { }
