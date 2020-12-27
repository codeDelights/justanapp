import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBranchesComponent } from './all-branches/all-branches.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'all',
    component: AllBranchesComponent,
  },
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [AllBranchesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BranchModule {}
