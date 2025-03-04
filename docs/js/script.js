function PicAkane(){
  const ex_img = document.getElementsByClassName("ex-img")[0];
  const show_img = document.getElementById("show-img");

  show_img.style.opacity = 0;
  ex_img.style.opacity =0;
  
  setTimeout(() => {
    ex_img.src="images/ex_akane.png";
    show_img.src="images/chara/akane.png";
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
    ex_img.src="images/ex_rei.png";
    show_img.src="images/chara/rei.png";
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
