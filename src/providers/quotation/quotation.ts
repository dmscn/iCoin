import { Coin } from './../../models/coin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class QuotationProvider {

  private url = "http://api.promasters.net.br/cotacao/v1/valores";

  constructor(public http: HttpClient) {
    console.log('Hello QuotationProvider Provider');
  }

  getCoins() {
    return this.http.get(this.url)
      .map((res:any) => {

        var coins:Coin[] = [];

        for (var key in res.valores) {          
          var coin:Coin = {
            code: key,
            img: this.getImgUrl(key),
            name: res.valores[key].nome,
            value: res.valores[key].valor
          }

          coins.push(coin);
        }
        
        return coins;

      });
  }

  private getImgUrl(coin):string {
    switch(coin) {
      case 'USD' :
        return 'http://aaj.tv/wp-content/uploads/2017/03/Dollar-960x540.png';
      case 'EUR':
        return 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/15J151K/rotating-money-500-euro-bills-money-seamless-loop_vkgloxn7e__F0000.png';
      case 'BTC':
        return 'https://financialtribune.com/sites/default/files/field/image/17january/15_bitcoin_5.jpg';
      case 'ARS':
        return 'https://4.bp.blogspot.com/-GXN3YxPZkCc/V0YSMEpmyXI/AAAAAAAACM4/n5U41ED1EtMMSw723iTbyPuvBHbt6W-VQCLcB/w1200-h630-p-k-no-nu/pesos-argentinos-dinheiro-argentina.png'
      case 'GBP':
        return 'https://www.youtrading.com/wp-content/uploads/2017/12/2017-12-6-GBPUSD-01.png';
    }
  }

}
