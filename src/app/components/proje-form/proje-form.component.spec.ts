import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjeFormComponent } from './proje-form.component';

describe('ProjeFormComponent', () => {
  let component: ProjeFormComponent;
  let fixture: ComponentFixture<ProjeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
