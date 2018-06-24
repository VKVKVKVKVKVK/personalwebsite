import { Component, OnInit } from '@angular/core';

import { Music } from '../../models/Music';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})

export class AddMusicComponent implements OnInit {

  music: Music = {
    title: '',
    artist: '',
    link: ''
  }

  disableVideoLink: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
