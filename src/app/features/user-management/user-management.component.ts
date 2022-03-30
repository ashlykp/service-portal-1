import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { DeauthorizeUserComponent } from '../deauthorize-user/deauthorize-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

/* Side-button Functionality */
  openAddUser() {
      this.dialog.open(AddUserComponent, {
      width: '800px',
      height: '500px'
    });
  }

  openEditUser() {
    this.dialog.open(EditUserComponent, {
      width: '800px',
      height: '500px'
    });
  }

  openDeauthorizeUser() {
    this.dialog.open(DeauthorizeUserComponent, {
      width: '700px',
      height: '400px'
    });
  }

}
