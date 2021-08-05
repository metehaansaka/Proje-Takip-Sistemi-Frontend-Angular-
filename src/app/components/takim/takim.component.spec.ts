import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakimComponent } from './takim.component';

describe('TakimComponent', () => {
  let component: TakimComponent;
  let fixture: ComponentFixture<TakimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
