function PicAkane(){
  document.getElementById("show-img").src="images/chara/akane.png";}
function PicRei(){
  document.getElementById("show-img").src="images/chara/rei.png";
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", () => {
      const isOpen = menu.style.left === "0px";
      menu.style.left = isOpen ? "-300px" : "0px";
  });
});
