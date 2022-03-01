import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../core/services/user-management.service';
import { User } from '../core/models/user.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  users: User[];

  constructor(private userManagementService: UserManagementService) { }

  ngOnInit() {
    this.userManagementService.getAllUsers().subscribe(result => {
      this.users = result;

      console.log('users', this.users);
    });
  }

}
