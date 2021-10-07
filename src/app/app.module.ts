import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBroadCastService } from './app.broadcast.service';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    GooglePlaceModule,
  ],
  providers: [
    AppBroadCastService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
