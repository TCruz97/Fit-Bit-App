import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountPage } from '../account/account';
import { GamesPage } from '../games/games';

/**
 * Generated class for the InviteFriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invite-friends',
  templateUrl: 'invite-friends.html',
})
export class InviteFriendsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InviteFriendsPage');
  }
  openAccountPage() {
    this.navCtrl.push(AccountPage);
    this.navCtrl.setRoot(AccountPage);
  }

  openSelectGamesPage() {
    this.navCtrl.push(GamesPage);
    this.navCtrl.setRoot(GamesPage);
  }


}
