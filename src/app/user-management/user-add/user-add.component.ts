import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserManagementService } from 'src/app/core/services/user-management.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  addUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userManagementService: UserManagementService) { }

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  addUser() {
    console.log('add user', this.addUserForm.value);

    this.userManagementService.addUser(this.addUserForm.value).subscribe(result => {
      console.log('add user result', result);
    });
  }

}
