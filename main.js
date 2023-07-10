import './style.scss'
import morpheme from './morpheme.js'
import convert from './convert.js'

document.addEventListener('mouseup', mySelection);

// ------ 取得選取範圍內文字＋添加拼音  ------ 
function mySelection(e){

  // 畫面上無論是 mouseup 還是 click ，只要滑鼠有新的接觸，就確保刪除畫面上既有 bubble 
  // 只要畫面上有 bubble ，且點擊到的對象不是 RT 或是 RUBY 元素時，就刪除 bubble 
  // ( 讓 RT和 RUBY 元素可以被使用者複製選取，方便進一步查詢)
  if(document.querySelector('.speech-bubble')){
    if(e.target.classList.contains('speech-bubble') || e.target.tagName == "RT" || e.target.tagName == "RUBY"){
      return;
    }else{
      document.querySelector('.speech-bubble').remove();
    }
  }

  let selectionObj = window.getSelection();
  let range;


  // 滑鼠選取完畢後的位置，是focus
  // focus 距離節點開頭差距不等於 0 個字
  // selectionObj.focusOffset !== 0 

  // 必須不是選到空字串，才觸發後續動作，也就是至少要選到一個字元才會觸發
  if(selectionObj.toString() !== ""){
    
    range = selectionObj.getRangeAt(0);
  
    // console.log(range.toString());

    let rangeH = range.getBoundingClientRect().height;
    let rangeW = range.getBoundingClientRect().width;
    let rangeLeft = range.getBoundingClientRect().left;
    
    // let docHeight = document.querySelector('body').scrollHeight;
    // let windowHeight = window.innerHeight;
    
    
    let bubble = document.createElement('div');
    bubble.className = 'speech-bubble';
    bubble.style.top = (e.pageY - rangeH - 10) + 'px';
    bubble.style.left = (rangeLeft - 40)  + 'px';
    
    document.body.append(bubble);

    // bubble.innerHTML = ` 
    // <ruby>
    // ${range.toString()}
    //   <rt>こうかんは うけたまわれません</rt>
    // </ruby>
    // `

    // console.log(bubble.offsetWidth);

    convert(range.toString(), bubble);


    // 對 bubble 監聽滑鼠移入事件，如果游標滑進 bubble 區域內，游標圖案就換成手掌，暗示可以點擊
    bubble.addEventListener('mouseover', changeCursor);

    // 對整個DOM文件監聽 click 事件，bubble 產生後，如果點擊到 bubble 以外的就刪除 bubble 
    document.addEventListener('click', cleanBubble)

    // 對 bubble 監聽「雙點擊」事件
    // 判斷 bubble 裡面當下詞句結構是拆開的還是整句的
    // 如果是拆開的，表示 rt 元素上有屬性「data-order」，雙點擊後切換為：整句句子直接添加拼音
    // 如果是整句的，雙點擊後切換為：先拆詞再添加拼音
    bubble.addEventListener('dblclick', ()=>{ switchStructure(range) } );

  }

}



// ------ 切換游標圖示  ------ 
function changeCursor(e){
  e.currentTarget.style.cursor = "pointer";
}

// ------ 清除 bubble  ------ 
  // 如果點擊到 bubble 以外區域，就刪除 bubble 
  // 判斷點擊到的是否為 <div class="speech-bubble"> 以及其內所含的子元素
  // 用 contains 方法判斷 class 名稱內是否含有 speech-bubble 
  // 注意驚嘆號代表「非」
  // 最後需回過頭再次呼叫 mySelection()，下次選取文字時才會接續產生新 bubble 
  // 否則再次選取畫面文字時，因此時畫面上已經沒有 bubble ，會不斷符合「點擊到 bubble 以外區域」的此一條件
  // 導致一有新的 bubble 產生，會立刻被刪除，看起來就像是沒有產生一樣。
  
  function cleanBubble(e){
    // console.log(e.target);
  
    if(!(e.target.classList.contains('speech-bubble') || e.target.tagName == "RUBY" || e.target.tagName == "RT")){ 
      
      // console.log('點擊到bubble以外區域');
  
      if(document.querySelector('.speech-bubble')){
        document.querySelector('.speech-bubble').remove();
      }
      
      mySelection(e);
  
    }
  }


// ------ 切換 bubble 內部文字結構 ------ 
function switchStructure(range){
  // 這邊的 event.currentTarget 代表 bubble 本身
  // textNode is an object 物件
  // Text.wholeText 屬性 allows to specify any text node and obtain all adjacent text as a single string
  // 用 trim() 取得除去字串空白後的純文字

  let rtElement = event.currentTarget.querySelector("ruby").children[0];
  let bubbleText = event.currentTarget.querySelector("ruby").childNodes[0]; 
  let bubbleString = bubbleText.wholeText; 
  let bubbleCleanString = bubbleString.trim(); 
  
  // console.log(event.currentTarget);
  // console.log(range);
  // console.log(rtElement);
  // console.log(bubbleText);
  // console.log(bubbleCleanString);
  
  
  if(rtElement.hasAttribute("data-order")){
    console.log("rt 元素 有 data-order 屬性")
    event.currentTarget.innerHTML = ""; //清空既有內容再放入新的拼音結果
    convert(range.toString(), event.currentTarget);
    event.currentTarget.classList.toggle("split");

  }else{
    morpheme(bubbleCleanString, event.currentTarget);
    event.currentTarget.classList.toggle("split");
  }

};




 // (e)=>{ 
        // console.log(e.currentTarget)
        // console.log(e.currentTarget.querySelector("ruby").childNodes[0]);
        // console.log(e.currentTarget.querySelector("ruby").children[0]);

        // let rtElement = e.currentTarget.querySelector("ruby").children[0]
        // let bubbleText = e.currentTarget.querySelector("ruby").childNodes[0]; 
        // let bubbleString = bubbleText.wholeText; 
        // let bubbleCleanString = bubbleString.trim(); 
        

        // if(rtElement.hasAttribute("data-order")){
        //   console.log("rt 元素 有 data-order 屬性")
        //   e.currentTarget.innerHTML = "";
        //   convert(range.toString(), e.currentTarget);
        //   e.currentTarget.classList.toggle("split");

        // }else{
        //   morpheme(bubbleCleanString, e.currentTarget);
        //   e.currentTarget.classList.toggle("split");
        // }
      // }