import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppNewComponent } from './app.comp';

import { MusicComponent } from './music/music.comp';
import {MusicService } from './music/music.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    AppNewComponent,
    MusicComponent,
  ],
  bootstrap: [AppNewComponent]
  ,

    // All Service declare here
    providers: [
        MusicService
    ]
})
export class AppModule { }
