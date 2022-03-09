import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UserManagementService } from 'src/app/core/services/user-management.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user: User;
  editUserForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router,private formBuilder: FormBuilder, private userManagementService: UserManagementService) { }

  ngOnInit() {
    this.editUserForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
    });

    let id = this.route.snapshot.paramMap.get('id');

    console.log('user id', id);

    this.userManagementService.getUser(id).subscribe(result => {
      console.log('result', result);

      this.user = result;

      if(result) {
        this.editUserForm.get('name').setValue(result.name);
        this.editUserForm.get('email').setValue(result.email);
      }
    });
  }

  get name() {
    return this.editUserForm.get('name');
  }

  get email() {
    return this.editUserForm.get('email');
  }

  editUser() {
    console.log('edit user', this.editUserForm.value);
    let requestBody = this.editUserForm.value;
    requestBody.id = this.user.id;

    this.userManagementService.editUser(requestBody).subscribe(result => {
      console.log('edit user result', result);
    });
  }

  goBack() {
    this.router.navigateByUrl('/user-mgmt/users');
  }

}
