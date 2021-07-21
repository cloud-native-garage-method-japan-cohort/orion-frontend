import { Result } from './../service/search.service';
import { Component, Input } from '@angular/core';
// サービスを登録するための import
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {

  /**
   * 画面からの検索テキストを格納するプロパティ
   *
   * @type {String}
   * @memberof SearchComponent
   */
  public responseText: String = '';

  /**
   * コンストラクタ. SearchComponent のインスタンスを生成する
   *
   * @param {SearchService} searchService Searchサービス
   * @memberof SearchComponent
   */
  constructor(private searchService: SearchService) { }

  onClick(value: string) {
    this.searchService.callRestAPI(value).subscribe(
      result => {
        this.responseText = result.responseText;
      });
  }

}
