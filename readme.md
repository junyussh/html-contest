## 使用源碼

0. [normalize.css](https://github.com/necolas/normalize.css/)
1. [Waves](http://fian.my.id/Waves)
2. [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/)

## 開發環境

作業系統： Windows 8.1 64bit
伺服器：[Node.js](http://nodejs.org/download/)
測試瀏覽器：Chrome 48

## 開發工具

0. [Compass](http://compass-style.org/)
1. [Gulp](http://gulpjs.com/)
2. [Sublime Text 3083](https://www.sublimetext.com/)
3. [Git](https://git-for-windows.github.io/)

## 使用

## 瀏覽觀看

請直接下載 zip 或在命令行輸入

```
git clone https://github.com/junyussh/html-contest.git
```

直接用瀏覽器開啟 index.html ，本網頁使用 HTML5、CSS3，為了達到最佳瀏覽效果請使用最新版的瀏覽器，如 [Firefox](http://mozilla.com.tw/firefox)、[Chrome](https://www.google.com/chrome/browser/desktop)、[Opera](http://www.opera.com/)。
經過測試，webkit 核心的瀏覽效果最佳。

推薦的 webkit 瀏覽器(依排名)：

0. [Chrome](https://www.google.com/chrome/browser/desktop)
2. [Citrio](http://citrio.com/)
1. [Safari](http://www.apple.com/tw/safari/)

## 建立開發環境

欲進行修改本網頁之源碼，請先進行以下動作。

請先安裝 [Ruby](http://rubyinstaller.org/downloads/)、[Node.js](http://nodejs.org/download/)。

安裝 Compass

```
gem install compass
```

在網頁根目錄安裝 Gulp

```
npm install -g gulp -save-dev
npm install gulp-compass gulp-cssnano gulp-rename gulp-connect -save-dev
```

開始啟動 Gulp

```
gulp
```

在瀏覽器輸入 `localhost:8080` 就可以瀏覽了。

### 目錄說明

assets 資料夾放置網頁組件

assets/sass 放置 SCSS 源碼

assets/css 是 SCSS 編譯出來的 CSS 檔

assets/js 放置網頁所需的 Javascript 檔案

assets/images 放置網頁所需圖片

post: Markdown 格式檔案編譯後的 html 檔

sources: Markdown 文章