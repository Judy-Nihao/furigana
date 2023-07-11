# Chrome Extension : Get Furigana 

這是一個電腦版 Google Chrome 擴充功能，可以替網頁上任選日文字詞，標上平假名拼音。

## 解決的需求

> 我想知道這個漢字怎麼念！(或者說，讀音是怎麼拼的？)

日語初學者對漢字讀音還不熟，很需要在漢字上面標註「平假名」輔助讀法，這種注音假名就稱為 Furigana (振り仮名) 。

這個擴充功能就是為了解決這個標音的需要，瀏覽網頁看到不會讀的漢字時，只要用游標選取文字，就會自動產生文字泡泡，替字詞添加平假名。兩者對照參看，幫助增進語言學習的視覺記憶。

![](https://github.com/Judy-Nihao/furigana/blob/main/public/extension-demo.jpeg?raw=true)

## 示範影片

（ 擴充功能上架審核中 ）

01: https://www.youtube.com/watch?v=Qt6EgHHGims

02: https://www.youtube.com/watch?v=HaO__ItC1T4


![](https://github.com/Judy-Nihao/furigana/blob/main/public/extension-preview-02.png?raw=true)


## 使用方式
1. 安裝擴充功能後，滑鼠游標選取網頁任意日文，所選的日文字詞就會自動添加平假名音標，出現在提示文字泡泡之中。

2. 滑鼠「雙擊」文字泡泡，可以切換為另一種顯示文字模式。
    - 整句模式：直接對整段選取詞句添加平假名。
    - 拆分模式：將所選詞語拆解成最小有意義的詞組，能更輕易看出每組漢字所對應的平假名拼音。

3. 適合套用在較短的詞彙身上，能專注在想知道的每個詞彙讀音。

![](https://github.com/Judy-Nihao/furigana/blob/main/public/%E2%80%8Efurigana%E7%A4%BA%E6%84%8F%E5%9C%9601.jpeg?raw=true)

![](https://github.com/Judy-Nihao/furigana/blob/main/public/%E2%80%8Efurigana%E7%A4%BA%E6%84%8F%E5%9C%9602.jpeg?raw=true)

![](https://github.com/Judy-Nihao/furigana/blob/main/public/%E2%80%8Efurigana%E7%A4%BA%E6%84%8F%E5%9C%9604.jpeg?raw=true)

## 請留意：漢字讀音的差異
單一漢字的讀音，與該漢字搭配其他詞彙一起讀的唸法，有時候會不一樣。可以透過雙擊文字泡泡，切換顯示模式觀察讀音差異。

## 推薦的擴充功能複合技
文字泡泡內的文字可以自由複製，建議可搭配「Google 翻譯」的語音功能使用。

複製所選日文貼到「Google 翻譯」後，就能一邊看著漢字與平假名，一邊聽著讀音，雙向加強記憶。

![](https://github.com/Judy-Nihao/furigana/blob/main/public/%E2%80%8Efurigana%E7%A4%BA%E6%84%8F%E5%9C%9603.jpeg?raw=true)


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

所以若超出請求次數，擴充功能可能會有失靈的時候。
