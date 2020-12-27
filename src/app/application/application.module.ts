import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: 'branch',
        loadChildren: () =>
          import('./branch/branch.module').then((m) => m.BranchModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [ApplicationComponent, HeaderComponent, SideBarComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ApplicationModule {}
