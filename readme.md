# mita-blog 1月8日課題

![mita-blog](https://github.com/takanashi66/mita-blog/blob/master/htdocs/screenshot.png)

水田・武田のコーディング課題用

## デザインについて
Adobe Illustrator CC 2018データ

[デザインデータ](https://github.com/takanashi66/mita-blog/tree/master/design)

## 作業手順

### セットアップ

#### Node.jsのインストール
Node.jsをインストールしていない場合はインストール。  
[Node.jsのインストール](https://nodejs.org/ja/)

#### gulpのインストール
gulpをインストールしていない場合はインストール。
```
npm install -g gulp-cli
```

##### node moduleのインストール

```
npm install
```

##### gulpの起動

```
gulp
```

##### モジュールが壊れていた場合

```
npm rebuild [壊れてたモジュール名]
```

##### XAMP環境
Macに直接または、[MAMP](https://www.mamp.info/en/)等を使って[WordPress](https://ja.wordpress.org/download/)をインストールできるようにする。

##### コーディング
デザインを元にリキッドデザインかつ、レスポンシブwebデザインでコーディングする。

##### WordPressテーマ化
ブログとして機能するように、コーディングしたHTMLをWordPressテーマ化する。

###### 制作するファイル
+ index.php
+ header.php
+ footer.php
+ sidebar.php
+ single.php
+ page.php
+ 404.php
+ functions.php
