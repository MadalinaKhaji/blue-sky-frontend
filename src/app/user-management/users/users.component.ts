import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserManagementService } from 'src/app/core/services/user-management.service';
import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userManagementService: UserManagementService, private router: Router) { }

  ngOnInit() {
    this.userManagementService.getAllUsers().subscribe(result => {
      this.users = result;

      console.log('users', this.users);
    });
  }

  addUser() {
    this.router.navigateByUrl('/user-mgmt/user-add');
  }

  deleteUser(id: number) {
    console.log('user id', id);

    this.userManagementService.deleteUser(id).subscribe(result => {
      console.log(result);

      this.users = this.users.filter(user => user.id !== id);
    });
  }

}
