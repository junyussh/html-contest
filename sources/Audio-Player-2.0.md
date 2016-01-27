
#Audio-Player-2.0
## 新功能

 1. 播放進度條
 2. 新增列表
 3. 增加歌詞顯示功能
 4. 專輯圖片轉動，感覺像以前的唱片機
 5. 音量控制條從 input 的 `range` 元素改用 noUiSlider
 6. UI 更新
 7. 瀏覽器的網頁標題會表示音樂是否播放，若有載入動態歌詞檔案則顯示目前歌詞
 8. 靜音設定後重整頁面仍可恢復原音量


## 功能

1.音量記憶

2.熱鍵播放、暫停、控制音量

3.音量大小程度會改變喇叭圖示

### 熱鍵

`Ctrl`+`Up`：提高音量

`Ctrl`+`Down`：降低音量

`Space(空白鍵)`：播放/暫停音樂

## 技術

### HTML 5 Audio 技術

使用 HTML 5 的 Audio 標籤，再使用 JavaScript + jQuery 控制

## 感謝

1.SkyArrow 寫的文章寫了 HTML `audio` 的用法和參數，本播放器的大部分程式碼採用 SkyArrow 的寫法，在此特別感謝他

2.播放進度、音量控制條採用 [noUiSlider](http://refreshless.com/nouislider/ "noUiSlider 的官網")

3.專輯圖片轉動的技術參考 ccbikai 做的 [HTML5 网页音乐播放器](https://coding.net/u/ccbikai/p/musicplayer/git)

## Bug

不可使用本機音樂源，會發生錯誤