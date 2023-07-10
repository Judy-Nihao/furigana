# Chrome Extension : Get Furigana 

這是一個電腦版 Google Chrome 的語言學習插件，可替游標所選文字標上平假名拼音。

## 解決的需求
日語初學者對漢字讀音還不熟，經常需要在漢字上標註「平假名」讀音，判斷發音的同時，還能增進視覺記憶。這個插件就是為了達成這個標音需要。

## 使用方式
1. 安裝插件，確定啟用之後，滑鼠游標選取網頁任意日文，所選的日文字詞就會自動添加平假名音標，出現在提示文字泡泡之中。

2. 少量選取字詞可以呈現最佳顯示，能專注在想知道的每個詞彙讀音。

3. 滑鼠雙擊文字泡泡，可以切換為另一種顯示文字模式。
    - 整句模式：直接對整段選取詞句添加平假名。
    - 拆分模式：將所選詞語拆解成最小有意義的詞彙，視覺上文字隔開，能更輕易看出每個漢字對應到的平假名拼音。

不過要特別注意，詞句拆分後，漢字的讀音可能會因此改變，因為日語裡面一個詞單獨的唸法，和搭配其他詞語時的唸法，讀音有時候會不同，

例如：「尋找」的日文是「探す」(さがす)，但是文字拆分時卻有可能被標註成「探 す」(たん す)，讀音就不同了。

透過滑鼠雙擊切換，可以觀察出兩者的讀音差異。

## 推薦的插件複合技
建議搭配「Google 翻譯」的語音翻譯功能使用，複製所選日文貼到「Google 翻譯」中，就能一邊看著漢字與平假名，一邊聽著讀音，雙向加強記憶。

以下示意圖也可觀察出「承れ」的標音差異。

![](https://raw.githubusercontent.com/Judy-Nihao/furigana/main/public/screen-shot-whole.png)

![](https://raw.githubusercontent.com/Judy-Nihao/furigana/main/public/screen-shot-split.png)


## Credit

此插件應用下列兩項「goo Labs API」：

1. Japanese Hiragana Conversion API : https://labs.goo.ne.jp/api/en/hiragana-translation/
2. Japanese Morphological Analysis API : https://labs.goo.ne.jp/api/en/morphological-analysis/

![](https://u.xgoo.jp/img/sgoo.png)

## 使用限制
[gooラボAPI官方文件](https://labs.goo.ne.jp/apiusage/)

非商用使用：
> Please use goo labs APIs for non-commercial purpose only. 

請求上限：官方文件提到他們的 API 是實驗性的服務，若一天之內請求太多次，會限制請求，但是沒有明說上限次數是多少。

> "We may restrict the usage in case when occurring the enormous volume of accesses in a day, or the big requests are sent in."

所以若超出請求次數，插件有可能會有失靈的時候。
