const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});




const colors = ["#5680e9", "#84ceeb", "#5ab9ea", "#c1c8e4", "#8860d0"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});




Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
    item.onclick = () => {
      item.parentElement.parentElement.classList.toggle("change");
    };
  });
