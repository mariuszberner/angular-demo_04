import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  napis = "toggle";
  @Input() product: any;
  @Output() notify = new EventEmitter();
  visible: boolean = true;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor() { }
  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
      this.napis = "toggle";
    } else {
      this.close.emit(null);
      this.napis = "not toggle";
    }
  }
  ngOnInit() { }

}