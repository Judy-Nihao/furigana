import './style.scss'
import morpheme from './morpheme.js'
import convert from './convert.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Furigana (振り仮名)</h1>
    <h2>Extension Demo</h2>
    <p> 
    無印良品はもともと、ものをつくるというよりは、「探す、見つけ出す」という姿勢で生活を見つめてきました。永く、すたれることなく活かされてきた日用品を、世界中から探し出し、それを生活や文化、習慣の変化に合わせて少しだけ改良し、適正な価格で再生してきました。
    2003年からは、この活動を「Found MUJI（見出されたMUJI）」と名付け、さらに世界の細部にまで入り込みながらよいものを探す旅をはじめました。
    見出されたモノたちの中には、そのままの品質ではわたしたちの生活に入りにくいものもあります。それらを今の生活の品質基準に合わせて、作者と対話しながら改良し、無印良品のものとして仕立て直します。よいものを探す目を磨き、そのもののエッセンスを残しつつ、それらを現代の生活に合わせてさらによくしていく。
    </p>

  </div>
`


document.addEventListener('mouseup', mySelection);

function mySelection(e){
  
  // 畫面上無論是 mouseup 還是 click ，只要滑鼠有新的接觸，就確保刪除畫面上既有 bubble 
  // 只要畫面上有 bubble ，且點擊到的對象不是 RT 或是 RUBY 元素時，就刪除 bubble 
  // ( 讓 RT和 RUBY 元素可以被使用者複製選取，方便進一步查詢)
  if(document.querySelector('.speech-bubble')){
    if(e.target.tagName == "RT" || e.target.tagName == "RUBY"){
      return;
    }else{
      document.querySelector('.speech-bubble').remove();
    }
  }

  let selectionObj = window.getSelection();
  let range;

  // 必須 anchor 點下的位置距離節點開頭相差不為 0 個字，或不是選到空字串，才觸發後續動作
  // 也就是至少要選到一個字元才會觸發
  if(selectionObj.anchorOffset !== 0 && selectionObj.toString() !== ""){
    
    range = selectionObj.getRangeAt(0);

    console.log(range.toString());

    let rangeH = range.getBoundingClientRect().height;
    let rangeW = range.getBoundingClientRect().width;
    let rangeTop = range.getBoundingClientRect().top;
    let rangeLeft = range.getBoundingClientRect().left;
    
    
    let bubble = document.createElement('div');
    bubble.className = 'speech-bubble';
    bubble.style.top = (rangeTop - rangeH - 65) + 'px';
    bubble.style.left = (rangeLeft) + 'px';

    document.body.append(bubble);

    // 新增測試文字
    // bubble.innerHTML = ` 
    // <ruby>
    // 生活
    // <rt>せいかつ</rt>
    // </ruby>
    // <ruby>
    // の
    // <rt>の</rt>
    // </ruby>
    // <ruby>
    // 品質
    // <rt>ひんしつ</rt>
    // </ruby>
    // <ruby>
    // 基準
    // <rt>きじゅん</rt>
    // </ruby>
    // `

    // bubble.innerHTML = ` 
    // <ruby>
    // 探す目を磨き
    //   <rt>さがす めを みがき</rt>
    // </ruby>
    // `

    
    convert(range.toString(), bubble);

    // morpheme(range.toString(), bubble);

    // bubble 產生後，對整個文件監聽 click 事件，如果點擊到 bubble 以外的就刪除 bubble 
    document.addEventListener('click', cleanBubble)
    bubble.addEventListener('click', ()=>{ 
      let bubbleText = bubble.querySelector("ruby").childNodes[0]; // textNode is an object 
      let bubbleString = bubbleText.wholeText; //Text.wholeText read-only property allows to specify any text node and obtain all adjacent text as a single string.
      let bubbleCleanString = bubbleString.trim(); //取得除去字串空白後的純文字
      // console.log(bubbleCleanString);

      // console.log(bubble.querySelector("ruby").children[0]);
      if(bubble.querySelector("ruby").children[0].hasAttribute("data-order")){
        console.log("我有 data-order 屬性")
        bubble.innerHTML = "";
        convert(range.toString(), bubble);

      }else{
        morpheme(bubbleCleanString, bubble);
      }
    })
  }

}

function cleanBubble(e){

  // 如果點擊到 bubble 以外區域
  // 如果點擊到的不是 <div class="speech-bubble"> 以及其內所含的元素，就刪除 bubble 
  // 注意驚嘆號
  if(!(e.target.className == 'speech-bubble' || e.target.tagName == "RUBY" || e.target.tagName == "RT")){ 
    // console.log('點擊到bubble以外區域');

    if(document.querySelector('.speech-bubble')){
      document.querySelector('.speech-bubble').remove();
    }
    
    // 必須回過頭再次呼叫 mySelection()，重新產生 bubble 
    // 否則再次選取畫面文字時，由於此時畫面上已經沒有 bubble ，會不斷符合「點擊到 bubble 以外區域」的這個條件
    // 導致一有新的 bubble 產生，會立刻被刪除，看起來就像是沒有產生一樣。
    mySelection();

  }
}