import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { Music } from '../../models/Music';
import { MusicsService } from '../../services/musics.service';
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

  disableVideoLink: boolean = false;
  @ViewChild('musicForm') form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private musicsService: MusicsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Music, valid: boolean}) {
    if (this.disableVideoLink) {
      value.link = "";
    }
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass:'alert-danger', timeout: 3000
      });
    } else {
      //Add music and redirect
      this.musicsService.newMusic(value);

      this.flashMessage.show('New Music added', {
        cssClass: 'alert-success', timeout: 3000
      });

      this.router.navigate(['/']);
    }
  }

}
