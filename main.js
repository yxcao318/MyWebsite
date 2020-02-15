//responsive menu
function Toggle(){
  var header = document.getElementById("header");
  header.classList.toggle('active');
}

//menu bar

var menu = document.getElementsByClassName("menu");
menu[0].onmouseover = function(){
this.innerHTML = "<span></span><span></span><span></span><span></span>主页 / Home";
}
menu[0].onmouseout = function(){
  this.innerHTML = "主页 / Home";
}

menu[1].onmouseover = function(){
this.innerHTML = "<span></span><span></span><span></span><span></span>关于我 / About";
}
menu[1].onmouseout = function(){
  this.innerHTML = "关于我 / About";
}

menu[2].onmouseover = function(){
this.innerHTML = "<span></span><span></span><span></span><span></span>作品集 / Portfolio";
}
menu[2].onmouseout = function(){
  this.innerHTML = "作品集 / Portfolio";
}

menu[3].onmouseover = function(){
this.innerHTML = "<span></span><span></span><span></span><span></span>联系我 / Contact";
}
menu[3].onmouseout = function(){
  this.innerHTML = "联系我 / Contact";
}

//portfolio link
var b0 = document.getElementById('b0');
b0.onclick = function(){
  var pdf = 'MSTU4083_FinalProject_YuxinCao.pdf';
  window.open('../js/pdf/web/viewer.html?file=https://yxcao318.github.io/MyWebsite/pdf/' + pdf, 'PDF');
};
