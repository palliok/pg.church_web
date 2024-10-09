import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hamburger-icon.component.html',
  styleUrl: './hamburger-icon.component.scss'
})
export class HamburgerIconComponent {

  @Output() public click = new EventEmitter<boolean>();

  public active: boolean = false;

  public toogle() {
    this.active = !this.active;
    this.click.next(this.active);
  }
}
