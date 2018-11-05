import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as sha256 from "fast-sha256";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
digest = ""
  constructor(public navCtrl: NavController) { }
  hashInput(new Buffer(input)){
    const hasher = new sha256.Hash();
    hasher.update(input);
    const result = hasher.digest();
    console.log(result);
    this.digest = result
  }
}
