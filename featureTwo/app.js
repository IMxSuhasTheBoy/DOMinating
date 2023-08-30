let card = document.getElementById("card");
let icon = document.querySelector("i");

card.addEventListener("dblclick", () => {
  icon.style.transform = "translate(-50%, -50%) scale(1)";
  icon.style.opacity = 0.7;
  setTimeout(() => {
    icon.style.opacity = 0;
  }, 1000);
  setTimeout(() => {
    icon.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2000);
});
