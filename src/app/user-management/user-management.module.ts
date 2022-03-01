import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { UsersComponent } from './users/users.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UserManagementComponent, UsersComponent, UserAddComponent, UserEditComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [UserManagementComponent]
})
export class UserManagementModule { }
