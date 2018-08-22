import { Component } from '@angular/core';
import { MusicService } from './music.service';
@Component({
  selector: 'app-music',
  templateUrl: './music.comp.html',
  styleUrls: ['./music.comp.css']
})
export class MusicComponent {
  title: String = 'My Music list';
  musics: any[];
  hideme = {};
  
constructor(private _musicService: MusicService) {
  this.hideme = {};
}
ngOnInit(): void {
  this._musicService.getProducts()
      .subscribe((data) => this.musics = data);
}
}