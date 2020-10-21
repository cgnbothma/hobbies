import { Component, OnInit } from '@angular/core';
import { HobbyService } from '../hobby.service'
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public hobbyData: Array<any>;
  public currentHobby: any;

  constructor ( public oktaAuth: OktaAuthService, private hobbyService: HobbyService) {
    hobbyService.get().subscribe((data: any) => this.hobbyData = data);
    this.currentHobby = this.setInitialValuesForJoggingData();
  }

  private setInitialValuesForJoggingData () {
    return {
      id: undefined,
      date: '',
      description: '',
      timeInSeconds: 0
    }
  }

  public createOrUpdateHobby = function(hobby: any) {
    // if hobby is present in hobbyData, we can assume this is an update
    // otherwise it is adding a new element
    let hobbyWithId;
    hobbyWithId = _.find(this.hobbyData, (el => el.id === hobby.id));

    if (hobbyWithId) {
      const updateIndex = _.findIndex(this.hobbyData, {id: hobbyWithId.id});
      this.workoutService.update(hobby).subscribe(
        hobbyRecord =>  this.hobbyData.splice(updateIndex, 1, hobby)
      );
    } else {
      this.hobbyService.add(hobby).subscribe(
        hobbyRecord => this.hobbyData.push(hobby)
      );
    }

    this.currentHobby = this.setInitialValuesForHobbyData();
  };

  ngOnInit(): void {
  }

  // ...

  public editClicked = function(record) {
  this.currentHobby = record;
  };

  public newClicked = function() {
  this.currentHobby = this.setInitialValuesForHobbyData(); 
  };

  public deleteClicked(record) {
  const deleteIndex = _.findIndex(this.hobbyData, {id: record.id});
  this.hobbyService.remove(record).subscribe(
    result => this.hobbyData.splice(deleteIndex, 1)
  );
}
}
