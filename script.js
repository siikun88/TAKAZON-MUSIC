const otowakka = new Audio('audio/otowakka.mp3');
const sinnkou = new Audio('audio/sinnkou.mp3');
const sushitabetai = new Audio('audio/sushitabetai.mp3');
const teikyouheiseidaigaku = new Audio('audio/teikyouheiseidaigaku.mp3');
const simazirou = new Audio('audio/simazirou.mp3');
const daisuke = new Audio('audio/daisuke.mp3');
function clickListener (e) {
    if (e.target.getAttribute("id") === "帝京平成大学"){
        teikyouheiseidaigaku.play();
    }else if (e.target.getAttribute("id") === "閃光のハサウェイ"){
        sinnkou.currentTime = 0;
        sinnkou.play();
    }else if (e.target.getAttribute("id") === "寿司食べたい"){
        sushitabetai.currentTime = 0;
        sushitabetai.play();
    }else if (e.target.getAttribute("id") === "ハッピージャムジャム"){
        simazirou.currentTime = 0;
        simazirou.play();
    }else if (e.target.getAttribute("id") === "おとわっか"){
        otowakka.currentTime = 0;
        otowakka.play();
    }else if (e.target.getAttribute("id") === "ダイスケ"){
        daisuke.currentTime = 0;
        daisuke.play();
    }
  }
  document.querySelectorAll("img").forEach((imgElm) => {
    imgElm.addEventListener('click', clickListener);
  })
