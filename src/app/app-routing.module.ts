import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE } from './app-routes';
import { ContainerComponent } from './modules/container/container.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [
  {
    path: ROUTE.HOME,
    component: ContainerComponent,
    children: [
      {
        path: ROUTE.HOME,
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: ROUTE.ADD,
        loadChildren: () => import('./modules/add/add.module').then(m => m.AddModule)
      },
      {
        path: ROUTE.EDIT,
        loadChildren: () => import('./modules/edit/edit.module').then(m => m.EditModule)
      },
      {
        path: ROUTE.DELETE,
        loadChildren: () => import('./modules/delete/delete.module').then(m => m.DeleteModule)
      },
    ]
  },
  { path: ROUTE.NOT_FOUND, component: NotFoundComponent },
  { path: '**', redirectTo: ROUTE.NOT_FOUND },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
