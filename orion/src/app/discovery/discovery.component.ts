import { Component, OnInit } from '@angular/core';
// サービスを登録するための import
import { DiscoveryService } from '../service/discovery.service';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.css']
})
export class DiscoveryComponent implements OnInit {
  /**
   * DiscoveryService のプロパティの参照を取得するプロパティ
   *
   * @type {String}
   * @memberof DiscoveryComponent
   */
  public serviceProp: String = '';

  /**
   * コンストラクタ. DiscoveryComponent のインスタンスを生成する
   *
   * @param {DiscoveryService} discoveryService Discoveryサービス
   * @memberof DiscoveryComponent
   */
  constructor(private discoveryService: DiscoveryService) { }

  /**
   * ライフサイクルメソッド｡コンポーネントの初期化で使用する
   *
   * @memberof DiscoveryComponent
   */
  ngOnInit(): void {
      this.serviceProp = this.discoveryService.commonProp;
  }

}
