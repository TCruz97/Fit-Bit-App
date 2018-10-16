import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

import { Push } from '@ionic-native/push';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InviteFriendsPage } from '../pages/invite-friends/invite-friends';
import { AccountPage } from '../pages/account/account';
import { GamesPage } from '../pages/games/games';
import { StatusPage } from '../pages/status/status';
import { LeaderboardPage } from '../pages/leaderboard/leaderboard';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InviteFriendsPage,
    GamesPage,
    AccountPage,
    StatusPage,
    LeaderboardPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoundProgressModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InviteFriendsPage,
    GamesPage,
    AccountPage,
    StatusPage,
    LeaderboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    Push,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
