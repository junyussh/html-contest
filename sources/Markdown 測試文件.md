# Markdown 測試文件 

标签（空格分隔）： 所有 Markdown

---
## 1. 分級標題

# 第一級標題

## 第二級標題

### 第三級標題

---
## 2. 粗體字和斜體字

**這是粗體字**

*這是斜體字*

## 3. 超連結

範例：

這是往 [Google][1] 的連結。
這是往 [Facebook](https://www.facebook.com/) 的連結。

## 4. 文字引用區塊

> 這是引用區塊

## 5. 無序列表與有序列表

這是無序列表的範例：

* 列表一
* 列表二
* 列表三

這是有序列表的範例：

1. 蘋果
2. 橘子
3. 香蕉

## 6. 程式碼區塊

無高亮範例：

`Javascript`，一種直譯式程式語言，是一種動態型別、基於原型的語言。

高亮顯示：

```javascript
var foo = 1;
var bar = 2;
if (foo + bar >= 3) {
  alert("foo + bar >= 3");
  }
document.write("Hello, world!");
```

## 7. 插入圖片

![Google][2]

## 8. 刪除線

這是正確文本。

~~這是錯誤的文本。~~

## 9. 表格

|名稱|價格|數量|
|---|---|---|
|計算機|800|2|
|硬碟|2488|3|
|CPU|12999|1|

## 10. 註腳

這是註腳[^note1]。

## 11. 定義名詞

Ruby on Ralis 安裝後即可使用 gem 安裝套件
:    Ruby 中原本就可以使用 gem ，不須安裝 Ralis 也可使用

## 12. LaTeX 公式

有理數定義：能表示成 $a \over b$ 的數，$a,b \in Z$，且 $b \neq 0$
一元二次方程式公式解：$ x = {-b \pm {\sqrt b^2 - 4ac} \over 2a}$

  [1]: https://www.google.com.tw/
  [2]: https://www.google.com.tw/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png
  [^note1]: Hello World