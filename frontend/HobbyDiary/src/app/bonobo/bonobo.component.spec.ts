import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonoboComponent } from './bonobo.component';

describe('BonoboComponent', () => {
  let component: BonoboComponent;
  let fixture: ComponentFixture<BonoboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonoboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonoboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
