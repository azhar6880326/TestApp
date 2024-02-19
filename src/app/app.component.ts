import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './services/housing.service';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterOutlet,
    PropertyListComponent,
    PropertyCardComponent,
    NavBarComponent,
    HttpClientModule,
  ],
  providers: [HousingService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TestApp';
}
