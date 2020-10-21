import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHobbyComponent } from './grid-hobby.component';

describe('GridHobbyComponent', () => {
  let component: GridHobbyComponent;
  let fixture: ComponentFixture<GridHobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridHobbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
