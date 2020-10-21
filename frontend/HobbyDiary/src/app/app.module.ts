import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridHobbyComponent } from './grid-hobby/grid-hobby.component';
import { AddOrUpdateHobbiesComponent } from './add-or-update-hobbies/add-or-update-hobbies.component';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import * as _ from 'lodash';

import { ListAllComponent } from './user/list-all/list-all.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

// import { MatButtonModule } from "gaan fokken soek dit self";
// import { MatCardModule } from 'nee hoe de fok moet ek weet??';
// import { MatIconModule } from "luigat";
// import { MatProgressSpinnerModule } from "chill ek sal nou fokken kyk jis jy is erger as my eks....";
// import { MatToolbarModule } from "ken jy haar nie miskien nie sy is 'n moerse bitch....";

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersListComponent } //spicegirl in the pool!!!
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridHobbyComponent,
    AddOrUpdateHobbiesComponent,
    ListAllComponent,
    AddComponent,


    // MatCardModule,
    // MatIconModule,
    // MatToolbarModule

    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  imports: [RouterModule.forRoot(routes)],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
