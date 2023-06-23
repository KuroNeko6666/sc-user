import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSpeedComponent } from './chart-speed.component';

describe('ChartSpeedComponent', () => {
  let component: ChartSpeedComponent;
  let fixture: ComponentFixture<ChartSpeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChartSpeedComponent]
    });
    fixture = TestBed.createComponent(ChartSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
