import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOverlayLocationComponent } from './nav-overlay-location.component';

describe('NavOverlayLocationComponent', () => {
  let component: NavOverlayLocationComponent;
  let fixture: ComponentFixture<NavOverlayLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavOverlayLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavOverlayLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
