import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateHobbiesComponent } from './add-or-update-hobbies.component';

describe('AddOrUpdateHobbiesComponent', () => {
  let component: AddOrUpdateHobbiesComponent;
  let fixture: ComponentFixture<AddOrUpdateHobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrUpdateHobbiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
