import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'add',
    component: AddUserComponent,
  },
  {
    path: '',
    redirectTo: 'add',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [AddUserComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserModule {}
