import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent implements OnInit {

	user = new User();
  constructor() { }

  ngOnInit(): void {

  }

  register(user:User):void{

  	console.log('user',user);
  }

}
