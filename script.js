var otowakka = new Audio("https://drive.google.com/u/0/uc?id=1KJWXY7yRMJNdcngomMePXEadlOyNk8I3&export=download");
var daisuke = new Audio("https://drive.google.com/u/0/uc?id=1LOkIjPRuesWqwxwlNArfmR5jYP_A4tJf&export=download");
var teikyou = new Audio("https://drive.google.com/u/0/uc?id=1mOzD7iWpY4W_cc_3BeQwmglhHSLrL2hu&export=download");
var sushi = new Audio("https://drive.google.com/u/0/uc?id=1Q1ddcpbWLmMTgVMguYkr0piMsaA4koyB&export=download");
var happy = new Audio("https://drive.google.com/u/0/uc?id=1037m0V1GtTiCyOdgW9hxeTtDcSjlWsYS&export=download");
var kannnamu = new Audio("https://drive.google.com/u/0/uc?id=1sB22tGsTnYb58X3cNyM6i7NMswyezTJL&export=download");
function clickListener (e) {
  if (e.target.getAttribute("id") === "帝京平成大学"){
    teikyou.play();
    alert( e.target.getAttribute("id") + "を再生中です。" )
  }else if (e.target.getAttribute("id") === "寿司食べたい"){
    sushi.play();
    alert( e.target.getAttribute("id") + "を再生中です。" )
  }else if (e.target.getAttribute("id") === "ハッピージャムジャム"){
    happy.play();
    alert( e.target.getAttribute("id") + "を再生中です。" )
  }else if (e.target.getAttribute("id") === "おとわっか"){
    otowakka.play();
    alert( e.target.getAttribute("id") + "を再生中です。" )
  }else if (e.target.getAttribute("id") === "ダイスケ"){
    daisuke.play();
    alert( e.target.getAttribute("id") + "を再生中です。" )
  }else if (e.target.getAttribute("id") === "江南スタイル"){
    kannnamu.play();
    alert( e.target.getAttribute("id") + "を再生中です。" )
  }else{
    alert("エラーが発生しました。サイトを再読み込みして、もう一度試してみてください。")
  }
}
document.querySelectorAll("img").forEach((imgElm) => {
  imgElm.addEventListener('click', clickListener);
})
