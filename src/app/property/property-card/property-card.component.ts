import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  standalone: true,
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent implements OnInit {
  @Input() property: any;

  constructor() {}

  ngOnInit() {}
}
