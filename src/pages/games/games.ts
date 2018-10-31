import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusPage } from '../status/status';
import { Timer } from '../../app/timer';
import { State } from '../../app/state';



/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamesPage');
  }
  openStatusPage() {
    this.navCtrl.push(StatusPage);
    this.navCtrl.setRoot(StatusPage);
  }
  // private btnPlay: string = 'START';

  // private timer: Timer = new Timer();
  // private state: State = new State();


  // play() {
  //   this.timer.start();
  //   this.state.setPlay();
  //   this.btnPlay = 'CONTINUE';
  // }

  // stop() {
  //   this.timer.stop();
  //   this.state.setStop();
  // }

  // backward() {
  //   this.timer.reset();
  //   this.state.setBackward();
  //   this.btnPlay = 'START';
  // }
}
