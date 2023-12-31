import axios from "axios";

export default function convert(input, speechBubble){
  // 創造 ruby 元素，植入選取文字，並添加到 speechBubble 裡面
  let newRuby = document.createElement('ruby');
  newRuby.textContent = input;
  speechBubble.append(newRuby);
  // console.log(newRuby);

  const endpoint = "https://labs.goo.ne.jp/api/hiragana";
  const payload = {
    "app_id": import.meta.env.VITE_API_KEY,
    "sentence": input,
    "output_type": "hiragana"
  };

  axiosGetConverted(newRuby);

  function axiosGetConverted(ruby){

    axios
    .post(endpoint,payload)
    .then((response) => { 
      let converted = response.data.converted;
      
      // console.log(response.data);
    
      let newRt = document.createElement('rt');
      
      newRt.textContent = converted;

      ruby.append(newRt);

    })
    .catch((error) => console.log(error));
  } 

}