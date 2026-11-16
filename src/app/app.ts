
import { Component } from '@angular/core';

import { Conference } from './models/conference';

import { ConferenceList } from './components/conference-list/conference-list';
import { ConferenceDetails } from './components/conference-details/conference-details';

import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { UserProfile } from './components/user-profile/user-profile';
import { FriendsList } from './components/friends-list/friends-list';
import { Notifications } from './components/notifications/notifications';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    ConferenceList,
    ConferenceDetails,
    Header,
    Navbar,
    UserProfile,
    FriendsList,
    Notifications,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  selectedConference: Conference | null = null;

  onConferenceSelected(conference: Conference): void {
    this.selectedConference = conference;
  }

}
