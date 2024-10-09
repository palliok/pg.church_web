import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarIconComponent } from '../icons/calendar-icon/calendar-icon.component';
import { LocationIconComponent } from '../icons/location-icon/location-icon.component';
import { TicketsIconComponent } from '../icons/tickets-icon/tickets-icon.component';
import { SearchIconComponent } from '../icons/search-icon/search-icon.component';
import { HamburgerIconComponent } from '../icons/hamburger-icon/hamburger-icon.component';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CalendarIconComponent, TicketsIconComponent, LocationIconComponent, SearchIconComponent, HamburgerIconComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
  public toogleMenu($event: any) {
    const a = $event;
  }
}
