import axios from 'axios';
import kanjiToHiragana from './kanji-convert.js';


// 測試 axios 
export default function morpheme(words, speechBubble){

  // 先清空既有的內容
  speechBubble.innerHTML = "";

  const endpoint = 'https://labs.goo.ne.jp/api/morph';
  const payload = {
    'app_id': import.meta.env.VITE_API_KEY,
    'sentence': words,
    'info_filter': 'form'
  };

  getBreakWords();

  function getBreakWords(){
    axios
    .post(endpoint,payload)
    .then((response) => {
      let result = response.data.word_list; // 是一個陣列裡面包陣列

      result.forEach((item)=>{

        item.forEach((word, index)=>{
          
          let newRuby = document.createElement('ruby');

          newRuby.textContent = word[0];
          newRuby.dataset.order = index;  
          speechBubble.append(newRuby);

          let newRt = document.createElement('rt');
          newRt.dataset.order = index;
          
          newRuby.append(newRt);

          kanjiToHiragana(word[0],index, newRt);

        })  

      })

    })
    .catch((error) => console.log(error));
    }

  

}
