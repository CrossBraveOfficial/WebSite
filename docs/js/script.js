var show_path = ["images/chara/akane.png", "images/chara/rei.png"];
var ex_path = ["images/ex_akane.png", "images/ex_rei.png"];

window.onload = () =>{
  for(let i=0; i < show_path.length; i++){
    var preloadimg = document.createElement("img");
    preloadimg.src=show_path[i];
  }
  for(let i=0; i < ex_path.length; i++){
    var preloadimg = document.createElement("img");
    preloadimg.src=ex_path[i];
  }
}

function PicAkane(){
  const ex_img = document.getElementsByClassName("ex-img")[0];
  const show_img = document.getElementById("show-img");

  show_img.style.opacity = 0;
  ex_img.style.opacity =0;
  
  setTimeout(() => {
    ex_img.src = ex_path[0];
    show_img.src = show_path[0];
    ex_img.style.opacity = 1;
    show_img.style.opacity = 1;
  }, 300);
}

function PicRei(){
  const ex_img = document.getElementsByClassName("ex-img")[0];
  const show_img = document.getElementById("show-img");

  show_img.style.opacity = 0;
  ex_img.style.opacity =0;
  
  setTimeout(() => {
    ex_img.src = ex_path[1];
    show_img.src = show_path[1];
    ex_img.style.opacity = 1;
    show_img.style.opacity = 1;
  }, 300);
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", () => {
      const isOpen = menu.style.left === "0px";
      menu.style.left = isOpen ? "-300px" : "0px";
  });
});

function MenuClose(){
  const menu = document.querySelector(".menu");
  if (window.matchMedia('(max-width: 767px)').matches) {
    const isOpen = menu.style.left === "0px";
    menu.style.left = isOpen ? "-300px" : "0px";
  } else if (window.matchMedia('(min-width:768px)').matches) {
    //PC処理
  }
}
