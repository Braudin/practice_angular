import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './component/pages/comics/details/details.component';
import { ListComponent } from './component/pages/comics/list/list.component';
import { HomeComponent } from './component/pages/home/home.component';

const routes: Routes = [
  {
    path: 'comics',
    children: [
      { path: ':id', component: DetailsComponent },
      { path: '', component: ListComponent },
    ],
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
