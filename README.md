# Chrome Extension : Get Furigana 

這是一個電腦版 Google Chrome 擴充功能，替網頁上選取的文字標上平假名拼音。

## 解決的需求
日語初學者對漢字讀音還不熟，經常需要在漢字上標註「平假名」讀音，這個擴充功能讓人在瀏覽網頁看到不會讀的漢字時，可以使用游標反白選取文字後，自動添加上平假名，研讀漢字發音的同時，也增進視覺記憶。

![](https://github.com/Judy-Nihao/furigana/blob/main/public/extension-demo.jpeg?raw=true)

## 示範影片

https://youtu.be/Qt6EgHHGims

（ 擴充功能上架審核中 ）

![](https://github.com/Judy-Nihao/furigana/blob/main/public/extension-preview-02.png?raw=true)


## 使用方式
1. 安裝擴充功能後，滑鼠游標選取網頁任意日文，所選的日文字詞就會自動添加平假名音標，出現在提示文字泡泡之中。

2. 少量選取字詞可以呈現最佳顯示，能專注在想知道的每個詞彙讀音。

3. 滑鼠「雙擊」文字泡泡，可以切換為另一種顯示文字模式。
    - 整句模式：直接對整段選取詞句添加平假名。
    - 拆分模式：將所選詞語拆解成最小有意義的詞彙，視覺上文字隔開，能更輕易看出每個漢字對應到的平假名拼音。

![](https://github.com/Judy-Nihao/furigana/blob/main/public/%E2%80%8Efurigana%E7%A4%BA%E6%84%8F%E5%9C%9601.jpeg?raw=true)

![](https://github.com/Judy-Nihao/furigana/blob/main/public/%E2%80%8Efurigana%E7%A4%BA%E6%84%8F%E5%9C%9602.jpeg?raw=true)

![](https://github.com/Judy-Nihao/furigana/blob/main/public/%E2%80%8Efurigana%E7%A4%BA%E6%84%8F%E5%9C%9604.jpeg?raw=true)

## 請留意：漢字讀音的差異
漢字單個的讀音，與搭配其他詞彙組成句子時的讀音，有時候會不一樣。可以透過雙擊文字泡泡，切換顯示模式觀察讀音差異。


## 推薦的插件複合技
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

所以若超出請求次數，插件有可能會有失靈的時候。
