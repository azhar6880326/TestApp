import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [PropertyCardComponent, CommonModule],
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: any;

  constructor(private housingService: HousingService) {
    this.housingService.getAllProperties().subscribe(
      (data) => {
        this.properties = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}
}
