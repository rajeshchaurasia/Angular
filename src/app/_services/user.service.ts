import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {

    private apiUrl = 'http://localhost:3000';
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${this.apiUrl}/users`);
    }

    register(user: User) {
        return this.http.post(`${this.apiUrl}/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.apiUrl}/users/${id}`);
    }
}