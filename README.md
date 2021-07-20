# orion-frontend
Team Orion フロントエンドアプリケーション（Angular）


# Installation
- Angular CLIのインストール
```
npm install -g @angular/cli
```
- npm アップデート
```
npm install
```

# System Requirement
```
% ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 12.1.2
Node: 14.16.0
Package Manager: npm 6.14.11
OS: darwin x64

Angular: 
... 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1201.2 (cli-only)
@angular-devkit/core         12.1.2 (cli-only)
@angular-devkit/schematics   12.1.2 (cli-only)
@schematics/angular          12.1.2 (cli-only)
    
% npm --version
6.14.11
```


# Usage
## Angular サーバ起動方法（ローカル稼働確認）

```
ng serve
```

下記にアクセスして画面が出ればOK
- http://localhost:4200


# Application Development
## 検索テキスト（Request JSON）
```
{"searchText":"コロナ"}
```
## 検索URL
```
localhost:8000/discovery/search
```
## 結果テキスト（Response JSON）
```
{"responseText":"新規治療薬、予防薬の開発 [ 編集 ] こ の 節 の 加 筆 が 望 ま れ て い ま す 。 （ 20 20 年 2 月 ） COVID-19 の感染 拡 大を 受 けて、 1. 抗原 投 与 による 予防薬 である ワ ク チ ン 2. 抗 体 投 与 による 予防薬 または治療 薬 である抗 体 医 薬 などを緊急に 開 発しようという取り 組 みが 複数始 まった。 2020 年 9 月 の 段階 で 製 品化 はされていない。"}
```
## Curl コマンド（Request 確認）
```
curl -X POST -H "Content-Type: application/json" -d '{"searchText":"コロナ"}' localhost:8000/discovery/search
```  

# Reference
- [Angular] Angular CLI で作成したプロジェクト構成をみる  
https://qiita.com/ksh-fthr/items/6b454264bb1f95434d42
- [Angular] Angular アプリの構成をみる  
https://qiita.com/ksh-fthr/items/d040cf8b2d15bd7e507d
- [Angular] Angular CLI によるコンポーネントの生成  
https://qiita.com/ksh-fthr/items/9f73fa161a1d7798def2
- [Angular] Angular CLI によるサービスの生成  
https://qiita.com/ksh-fthr/items/900baee52b80e6ed1b66