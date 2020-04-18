import { Component, OnInit } from '@angular/core';
import { Users } from '../_models/users';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
 // styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Users[];
  userForm: boolean = false;
  isNewUser: boolean;
  newUser: any = {};
  editUserForm: boolean = false;
  editedUser: any = {};
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.users = this.getUsers();
    console.log('uses',this.users);
  }

  getUsers(): Users[] {
    return this.userService.getUsersFromData();
  }

  showEditUserForm(user: Users) {
    if (!user) {
      this.userForm = false;
      return;
    }
    this.editUserForm = true;
    this.editedUser = user;
  }

  showAddUserForm() {
    // resets form if edited user
    if (this.users.length) {
      this.newUser = {};
    }
    this.userForm = true;
    this.isNewUser = true;

  }

  saveUser(user: Users) {
    if (this.isNewUser) {
      //add a new user
      this.userService.addUser(user);
    }
    this.userForm = false;
  }

  updateUser() {
    this.userService.updateUser(this.editedUser);
    this.editUserForm = false;
    this.editedUser = {};
  }

  removeUser(user: Users) {
    this.userService.deleteUser(user);
  }

  cancelEdits() {
    this.editedUser = {};
    this.editUserForm = false;
  }

  cancelNewUser() {
    this.newUser = {};
    this.userForm = false;
  }

}