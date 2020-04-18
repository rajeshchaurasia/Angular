import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';
@Component({
    selector: 'app-stock-status',
    template: `<input type='number' [(ngModel)]='updatedstockvalue'/> <button class='btn btn-primary'
     [style.background]='color'
     (click)="stockValueChanged()">Change Stock Value</button> `
})
export class StockStatusComponent implements OnChanges {
    @Input() stock: number;
    @Input() productId: number;
    @Output() stockValueChange = new EventEmitter();
    color = '';
    updatedstockvalue: number;
    stockValueChanged() {
        this.stockValueChange.emit({ id: this.productId, updatdstockvalue: this.updatedstockvalue });
        this.updatedstockvalue = null;
    }
    ngOnChanges() {
    	console.log('inside on change');
        if (this.stock > 10) {
            this.color = 'green';
        } else {
            this.color = 'red';
        }
    }
}