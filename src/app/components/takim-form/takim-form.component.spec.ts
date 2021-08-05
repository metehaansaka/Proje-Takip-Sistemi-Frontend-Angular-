import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakimFormComponent } from './takim-form.component';

describe('TakimFormComponent', () => {
  let component: TakimFormComponent;
  let fixture: ComponentFixture<TakimFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakimFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakimFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
