import axios from "axios";

// 測試 axios 
export default function kanjiToHiragana(input, index, rt){

  // rt 是「每一個」已經存在於 DOM 上面的 <rt data-order=""> 元素
  // console.log(rt);

  const endpoint = "https://labs.goo.ne.jp/api/hiragana";
  const payload = {
    "app_id": import.meta.env.VITE_API_KEY,
    "request_id": index, 
    "sentence": input,
    "output_type": "hiragana"
  };

  function axiosGetConverted(){

    axios
    .post(endpoint,payload)
    .then((response) => {
      let convertedWords = response.data.converted;
      let convertedID = response.data.request_id;
      
      // console.log(response.data);
  
        if( (rt.dataset.order) == convertedID ){
          rt.textContent = convertedWords;
          // console.log(rt);
        }
      
    })
    .catch((error) => console.log(error));
  
  } 
  axiosGetConverted();

}



  // async function axiosGetConverted(){
  //     try {
  //     const response = await axios.post(endpoint,payload);
  //     let convertedWords = response.data.converted;
  //     let convertedID = response.data.request_id;
  //     console.log(response.data);

  //     if( (rt.dataset.order) == convertedID ){
  //       rt.textContent = convertedWords;
  //       console.log(rt);
  //     }
      
    
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
