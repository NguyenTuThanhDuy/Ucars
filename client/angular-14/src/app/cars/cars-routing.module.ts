import { ViewDetailComponent } from './view-detail/view-detail.component';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',component:ListComponent
      },
      {
        path: 'view',component:ViewComponent,
        children: [
          {
            path:'view-detail',component:ViewDetailComponent
          },
          {
            path:'edit/:id',component:EditComponent
          },
          {
            path:'delete/:id',component:DeleteComponent
          },
        ]
      },
      
      {
        path: 'create',component:CreateComponent
      },
      {
        path:'search',component:SearchComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
