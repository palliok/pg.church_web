import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOverlayComponent } from './nav-overlay.component';

describe('NavOverlayComponent', () => {
  let component: NavOverlayComponent;
  let fixture: ComponentFixture<NavOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
