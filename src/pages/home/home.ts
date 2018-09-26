import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
//import { InvalidLoginPage } from '../invalid-login/invalid-login';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Navbar } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { InviteFriendsPage } from '../invite-friends/invite-friends';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Navbar) navBar: Navbar;
  data: any = {}
  username: any = {};
  accessToken: any = {};
  registrationID: any = {};
  type = "password";
  password_icon = "eye";

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient, private inAppBrowser: InAppBrowser, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.getRegistrationID();
  }


  login() {
    //var link = 'https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=228NH4&redirect_uri=http%3A%2F%2Fkidsteam.boisestate.edu%2Fkidfit%2Fhandle_redirect.php&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&state=';
    var link_register = 'http://www.fitbit.com/oauth2/authorize?response_type=code&client_id=228NH4&redirect_uri=http%3A%2F%2Fkidsteam.boisestate.edu%2Fkidfit%2Fhandle_redirect.php&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&prompt=login consent&state=';
    var link = 'http://www.fitbit.com/oauth2/authorize?response_type=code&client_id=228NH4&redirect_uri=http%3A%2F%2Fkidsteam.boisestate.edu%2Fkidfit%2Fhandle_redirect.php&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&state=';
    this.getLoginUserDetails().then(
      data => {
        console.log('my data: ', data);
        if (data['error']) {
          if (data['access']) {
            this.storage.set("accessToken", data['access_token']);
            this.storage.set("username", data['username']);
            this.username = data['username'];
            this.accessToken = data['access_token'];
            link_register = link_register.concat(data['username']);
            let browser = this.inAppBrowser.create(link_register, "_blank");
            browser.on("exit").subscribe(data => {
              this.getUserData().then(data => {
                if (data['error']) {
                  console.log(data)

                  this.navCtrl.push('InvalidLoginPage', { error: "acess denied" });

                }
                else if (data['login'] == "success") {
                  this.navCtrl.push('InviteFriendsPage', { data: data });
                  this.navCtrl.setRoot(InviteFriendsPage);
                  console.log(data);
                }
              })
            })

          }

          else {
            this.navCtrl.push('InvalidLoginPage', { error: data['error'] });
          }
        }
        else if (data['login'] == 'success') {
          this.storage.set("accessToken", data['access_token']);
          this.storage.set("username", data['username']);
          this.username = data['username'];
          this.accessToken = data['access_token'];
          link = link.concat(data['username']);
          let browser = this.inAppBrowser.create(link, "_blank");
          browser.on("exit").subscribe(data => {
            this.getUserData().then(data => {
              if (data['error']) {
                console.log(data)
                if (data['error'] == "Fitbit Data Access Denied") {
                  this.navCtrl.push('InvalidLoginPage', { error: "acess denied" });
                }
                this.navCtrl.push('HomePage');
              }
              else if (data['login'] == "success") {
                this.navCtrl.push('InviteFriendsPage', { data: data });
                this.navCtrl.setRoot(InviteFriendsPage);
                console.log(data);
              }
            })
          })
        }
      })

    this.data.password = "";

  }

  getLoginUserDetails() {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
      })
    };
    var link = 'http://kidsteam.boisestate.edu/kidfit/verify_login.php?username='.concat(this.data.username);
    link = link.concat('&password=');
    link = link.concat(this.data.password);
    link = link.concat('&loginType=login');
    link = link.concat('&registrationID=')

    link = link.concat(this.registrationID);


    return new Promise(resolve => {
      this.httpClient.get(link, httpHeaders)
        .subscribe(data => {
          resolve(data);
        }, error => {
          resolve(error);
        })
    });
  }


  register() {
    var link = 'http://www.fitbit.com/oauth2/authorize?response_type=code&client_id=228NH4&redirect_uri=http%3A%2F%2Fkidsteam.boisestate.edu%2Fkidfit%2Fhandle_redirect.php&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&prompt=login consent&state=';

    this.getRegisterUserDetails().then(
      data => {
        console.log('my data: ', data);
        if (data['error']) {
          console.log(data['error']);
          this.navCtrl.push('InvalidLoginPage', { error: JSON.stringify(data['error']) });
        }
        else if (data['register'] == 'success') {
          this.storage.set("accessToken", data['access_token']);
          this.storage.set("username", data['username']);
          this.username = data['username'];
          this.accessToken = data['access_token'];
          link = link.concat(data['username']);
          let browser = this.inAppBrowser.create(link, "_blank");
          browser.on("exit").subscribe(data => {
            this.getUserData().then(data => {
              if (data['error']) {
                console.log(data)
                if (data['access']) {

                }
                else {
                  this.navCtrl.push('InvalidLoginPage', { error: "data['error']" });
                }
                //this.navCtrl.push('LoginPage');
              }
              else if (data['login'] == "success") {
                this.navCtrl.push('InviteFriendsPage', { data: data });
                this.navCtrl.setRoot(InviteFriendsPage);
                console.log(data);
              }
            })
          }
          )
        }
      })
    this.data.password = "";
  }

  getRegisterUserDetails() {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
      })
    };
    var link = 'http://kidsteam.boisestate.edu/kidfit/verify_login.php?username='.concat(this.data.username);
    link = link.concat('&password=');
    link = link.concat(this.data.password);
    link = link.concat('&loginType=register');
    link = link.concat('&registrationID=')

    link = link.concat(this.registrationID);


    return new Promise(resolve => {
      this.httpClient.get(link, httpHeaders)
        .subscribe(data => {
          resolve(data);
        }, error => {
          resolve(error);
        })
    });
  }

  getUserData() {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
      })
    };
    console.log("getting user data");
    var link = 'http://kidsteam.boisestate.edu/kidfit/direct_login.php?username=';
    link = link.concat(this.username);
    link = link.concat('&accessToken=');
    link = link.concat(this.accessToken);
    return new Promise(resolve => {
      this.httpClient.get(link, httpHeaders)
        .subscribe(data => {
          resolve(data);
        }, error => {
          resolve(error);
        })
    })
  }

  showHide() {
    if (this.type == "password") {
      this.type = "text";
    }
    else {
      this.type = "password";
    }


  }
  getRegistrationID() {

    return new Promise(resolve => {
      this.storage.get('registrationID').then((val) => {
        this.registrationID = val;
        resolve(val);
      });
    })

  }

  openInviteFriends() {
    this.navCtrl.push(InviteFriendsPage);
    this.navCtrl.setRoot(InviteFriendsPage);
  }
}
