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
  window.open('https://yxcao318.github.io/MyWebsite/pdf/HMxGreenDesign_YuxinCao.pdf');
};

var b1 = document.getElementById('b1');
b1.onclick = function(){
  var pdf = 'MSTU4040_FinalProject_YuxinCao.pdf';
  window.open('../js/pdf/web/viewer.html?file=https://yxcao318.github.io/MyWebsite/pdf/' + pdf, 'PDF');
};

var b2 = document.getElementById('b2');
b2.onclick = function(){
  var pdf = 'HMxGreenDesign_YuxinCao.pdf';
  window.open('../js/pdf/web/viewer.html?file=https://yxcao318.github.io/MyWebsite/pdf/' + pdf, 'PDF');
};
var b3 = document.getElementById('b3');
b3.onclick = function(){
  window.open('https://v.youku.com/v_show/id_XMzk1NDgwODgwNA==.html?spm=a2hzp.8244740.0.0');
};
var b4 = document.getElementById('b4');
b4.onclick = function(){
  var pdf = 'AHA5060_Project_YuxinCao.pdf';
  window.open('../js/pdf/web/viewer.html?file=https://yxcao318.github.io/MyWebsite/pdf/' + pdf, 'PDF');
};

var b5 = document.getElementById('b5');
b5.onclick = function(){
  var pdf = 'AHA5060_FinalProject_YuxinCao.pdf';
  window.open('../js/pdf/web/viewer.html?file=https://yxcao318.github.io/MyWebsite/pdf/' + pdf, 'PDF');
};

//Contact

function Submit(){
  alert("提交成功，请耐心等待回复，谢谢！Form submitted. Thanks for your patience in waiting for responses.");
}
