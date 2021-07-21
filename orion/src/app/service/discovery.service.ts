import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscoveryService {

  /**
   * 本サービスを DI したコンポーネントで参照されるプロパティ
   *
   * @type {String}
   * @memberof DiscoveryService
   */
  public commonProp: String = '';

  /**
   * コンストラクタ. DiscoveryService のインスタンスを生成する
   *
   * @memberof DiscoveryService
   */
  constructor() {
      this.commonProp = 'このプロパティは DiscoveryService のものです';
  }

}
