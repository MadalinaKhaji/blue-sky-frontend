import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectManagementComponent } from './project-management.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

const routes: Routes = [
  {path: '', component: ProjectManagementComponent, children: [
    {path: '', redirectTo: 'projects', pathMatch: 'full'},
    {path: 'projects', component: ProjectsComponent},
    {path: 'project-add', component: ProjectAddComponent},
    {path: 'project-edit/:id', component: ProjectEditComponent},
  ]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ProjectManagementRoutingModule { }