import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserManagementService } from 'src/app/core/services/user-management.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  addUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userManagementService: UserManagementService, private router: Router) { }

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get name() {
    return this.addUserForm.get('name');
  }

  get email() {
    return this.addUserForm.get('email');
  }

  addUser() {
    console.log('add user', this.addUserForm.value);

    this.userManagementService.addUser(this.addUserForm.value).subscribe(result => {
      console.log('add user result', result);
    });
  }

  goBack() {
    this.router.navigateByUrl('/user-mgmt/users');
  }

}
