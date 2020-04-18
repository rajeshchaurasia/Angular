import { Component, OnInit,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

	public message:string = 'Value set from component'
	public blue:string = 'red'
	val:string = '';
	private changes:string = '';
  constructor() { }

  ngOnInit(): void {

  	console.log('ng on init db');

  }

  ngOnChanges(changes: SimpleChanges){


		console.log('ng on chnage',changes);

  }
  myFunction(): void { 

       alert('Show alert!'); 
   } 

   ngOnDestroy() {

   	console.log('ng on destroy');
   }

    ngAfterViewInit() {

    	console.log('ng after view init');
    }

    ngAfterContentInit(){

    	console.log('ng after content init');

    }

ngAfterContentChecked(){

	console.log('ng after content checked');
}

ngDoCheck(){
    console.log("do check")
  }
  ngAfterViewChecked(){
    console.log("after view checked")
  }
}
