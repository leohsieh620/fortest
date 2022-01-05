let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list =document.getElementById("list");
btn.addEventListener("click",news);
function news(){
  list.innerHTML = list.innerHTML+`
  <div class="news">
  <h2>${title.value}</h2>
  <p>${content.value}</p><hr>
  </div>
  `;
}
let i=0, imgArr=new Array();
imgArr[0] = "https://cdn2.ettoday.net/images/5499/e5499852.jpg";
imgArr[1] = "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/12/10/99/7176548.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=1050";
imgArr[2] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU4yHF2Lskhhp-UvvOYf5UmcQpgO2zz5b7sA&usqp=CAU";

function showing() {
  document.getElementById('ico').src = imgArr[i];
  i = (i+1) % 3;
}

function show(){
  setInterval(showing, 2000);
}