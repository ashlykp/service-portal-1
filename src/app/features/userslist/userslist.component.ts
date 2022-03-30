import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserComponent } from '../delete-user/delete-user.component';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openDeleteUser() {
    this.dialog.open(DeleteUserComponent, {
      width: '600px',
      height: '300px'
    });
  }
  searchValue: string='';
  pageSize: any;
  /*
  pageChanged($event) {

  }
  */
}
