import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectManagementComponent } from './project-management.component';
import { ProjectManagementRoutingModule } from './project-management-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProjectsComponent, ProjectAddComponent, ProjectEditComponent, ProjectManagementComponent],
  imports: [
    CommonModule,
    ProjectManagementRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ProjectManagementModule { }
