import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Music } from '../models/Music';


@Injectable({
  providedIn: 'root'
})
export class MusicsService {

  musicsCollection : AngularFirestoreCollection<Music>;
  musicDoc: AngularFirestoreDocument<Music>;
  musics: Observable<Music[]>;
  music: Observable<Music>;

  constructor(private afs: AngularFirestore) { 
    this.musicsCollection = this.afs.collection('musics', ref => ref.orderBy('title', 'asc'));
  }

  getMusics(): Observable<Music[]> {
    //Get musics with the id
    this.musics = this.musicsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Music;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
    return this.musics;
  }
}
