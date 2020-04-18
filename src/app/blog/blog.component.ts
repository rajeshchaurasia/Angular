import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {

	let currentUser = this.authenticationService.currentUserValue;
	console.log('current user',currentUser);

  //	  this.printUser();

	setTimeout(() => this.printUser(), 350);
  }

  printUser(){

	console.log('hello inside print user');
  }

}
