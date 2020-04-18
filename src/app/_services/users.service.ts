import { Injectable } from '@angular/core';
import { Users } from '../_models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private upersons: Users[] = [
    {
      id: 1,
      firstName: 'Durgesh',
      lastName: 'Pal'
    },
    {
      id: 2,
      firstName: 'Ankur',
      lastName: 'Pal'
    }
  ]
  constructor() { }

  getUsersFromData(): Users[] {
    return this.upersons;
  }

  addUser(user: Users) {
    user.id = this.upersons.length + 1;
    this.upersons.push(user);

  }
  updateUser(user: Users) {
    let index = this.upersons.findIndex(u => user.id === u.id);
    this.upersons[index] = user;
  }
  deleteUser(user: Users) {
    this.upersons.splice(this.upersons.indexOf(user), 1);
  }

}