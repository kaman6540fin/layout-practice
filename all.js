//menu control
const menuToggle = document.getElementById("menu-toggle");
const toggleContent = document.getElementById("toggle-content");

if (menuToggle && toggleContent) {
  let isShow = false;

  menuToggle.onclick = function () {
    if (!isShow) {
      toggleContent.className = "show";
      isShow = true;
    } else {
      toggleContent.className = "";
      isShow = false;
    }
  };
}

//notice control

const contentControl = document.getElementById("content-control");
const contentControler = document.getElementById("content-controler");
const arrow = document.getElementById('arrow')


if (contentControler && contentControl) {

    let isShow = false;
  contentControler.onclick = function () {
    if (!isShow) {
      contentControl.className += " show";
      arrow.className = "down";
      isShow = true;
    }else{
      contentControl.className = "content";
      arrow.className = "up";
      isShow = false;
    }
  };
}


//go-top

const goTop = document.getElementsByClassName('go-top')[0]

if(goTop){
    goTop.onclick = function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}