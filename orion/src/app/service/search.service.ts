import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  /**
   * バックエンドCall用URL
   *
   * @memberof SearchService
   */
  private backendCallUrl = 'https://back-api-route-team-orion.jp1-bootcamp-6ccd7f378ae819553d37d5f2ee142bd6-0000.jp-tok.containers.appdomain.cloud/discovery/search';
  // private backendCallUrl = 'http://localhost:8000/discovery/search';

  /**
   * 本サービスを DI したコンポーネントで参照されるプロパティ
   *
   * @type {String}
   * @memberof SearchService
   */
  public responseText: String = '';

  /**
   * コンストラクタ. SearchService のインスタンスを生成する
   *
   * @memberof SearchService
   */
  constructor(private httpClient: HttpClient) {}

  /**
   * RESTでバックエンドAPIをCallしてWatson Discoveryから値を取得する
   *
   * @memberof SearchService
   */
   callRestAPI(searchText: String): Observable<Result> {
      // API Call
      return this.httpClient.post<Result>(this.backendCallUrl, '{"searchText":"コロナ"}');
  }

}

export interface Result {
  responseText: string;
}

