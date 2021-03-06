import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';

import { InviteFriendsPage } from '../pages/invite-friends/invite-friends';
import { AccountPage } from '../pages/account/account';
import { GamesPage } from '../pages/games/games';
import { StatusPage } from '../pages/status/status';
import { LeaderboardPage } from '../pages/leaderboard/leaderboard';
import { TabsPage } from '../pages/tabs/tabs';
import { CurrentPage } from '../pages/current/current';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Invite', component: InviteFriendsPage },
      { title: 'Choose Activity', component: GamesPage },
      { title: 'Manage Account', component: AccountPage },
      { title: 'Activity Progress', component: StatusPage },
      { title: 'Leaderboard', component: LeaderboardPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
