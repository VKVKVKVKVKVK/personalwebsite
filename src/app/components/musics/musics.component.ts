import { Component, OnInit } from '@angular/core';
import { MusicsService } from '../../services/musics.service';
import { Music } from '../../models/Music';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css']
})
export class MusicsComponent implements OnInit {

  musics: Music[];

  constructor(private musicService: MusicsService) { }

  ngOnInit() {
    this.musicService.getMusics().subscribe(musics => this.musics = musics);
  }

}
