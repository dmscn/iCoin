import { Coin } from './../../models/coin';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuotationProvider } from './../../providers/quotation/quotation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coins:Coin[];
 

  constructor(public navCtrl: NavController, private quotationProvider: QuotationProvider) {
    
  }

  ionViewWillEnter(){
    this.quotationProvider.getCoins()
      .subscribe(coins => {
        this.coins = coins;
      });
  }

}
