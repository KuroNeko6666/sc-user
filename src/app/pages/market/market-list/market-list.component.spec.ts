import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketListComponent } from './market-list.component';

describe('MarketListComponent', () => {
  let component: MarketListComponent;
  let fixture: ComponentFixture<MarketListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MarketListComponent]
    });
    fixture = TestBed.createComponent(MarketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
