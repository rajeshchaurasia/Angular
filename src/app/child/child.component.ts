import { Component, OnInit, Input, Output, EventEmitter,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input() PData: number;
 @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    console.log('inside ng on init');
  }

  onChange(value) {
  	console.log('chile value',value);
    this.childEvent.emit(value);
  }

  handleclick() {
        console.log('hey I am  clicked in child');
    }
   ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

}
