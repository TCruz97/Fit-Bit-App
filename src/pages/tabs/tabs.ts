import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountPage } from '../account/account';
import { GamesPage } from '../games/games';
import { LeaderboardPage } from '../leaderboard/leaderboard';
import { HomePage } from '../home/home';
import { InviteFriendsPage } from '../invite-friends/invite-friends';
import { CurrentPage } from '../current/current';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
  GamesPage = GamesPage;
  AccountPage = AccountPage;
  LeaderboardPage = LeaderboardPage;
  HomePage = HomePage;
  InviteFriendsPage = InviteFriendsPage;
  CurrentPage = CurrentPage;

}
