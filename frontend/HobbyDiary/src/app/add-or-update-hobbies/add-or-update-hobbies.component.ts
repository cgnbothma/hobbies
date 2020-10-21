import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-or-update-hobbies',
  templateUrl: './add-or-update-hobbies.component.html',
  styleUrls: ['./add-or-update-hobbies.component.css']
})
export class AddOrUpdateHobbiesComponent implements OnInit {
  @Output() hobbyCreated = new EventEmitter<any>();
  @Input() hobbyInfo: any;

  public buttonText = 'Save';

  constructor() {
    this.clearHobbyInfo();
    console.log(this.hobbyInfo.date);
   }

  ngOnInit(): void {

  }

  private clearHobbyInfo = function() {
    // Create an empty hobby object
    this.hobbyInfo = {
      id: undefined,
      date: '',
      description: '',
      timeInSeconds: 0
    };
  };

  public addOrUpdateHobbyRecord = function(event) {
    this.hobbyCreated.emit(this.hobbyInfo);
    this.clearHobbyInfo();
  };
}


