
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-list',
  standalone: true,
  imports: [FormsModule, DatePipe, UpperCasePipe],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {

  searchTitle: string = '';

  @Output() conferenceSelected = new EventEmitter<Conference>();

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Conférence Angular',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 50,
      nbParticipants: 25
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Workshop Signals',
      date: new Date(2027, 10, 30),
      place: 'Ariana',
      maxParticipants: 30,
      nbParticipants: 24
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Conférence Web',
      date: new Date(2027, 10, 20),
      place: 'Sousse',
      maxParticipants: 20,
      nbParticipants: 20
    }
  ];

  getPlacesRestantes(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  inscrire(c: Conference): void {
    if (this.getPlacesRestantes(c) > 0) {
      c.nbParticipants++;
    }
  }

  selectionnerConference(c: Conference): void {
    this.conferenceSelected.emit(c);
  }
}
