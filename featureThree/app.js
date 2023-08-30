let main = document.querySelector("#main");
let cussr = document.querySelector("#cursor");

main.addEventListener("mousemove", function (dets) {
  cussr.style.left = dets.x + "px";
  cussr.style.top = dets.y + "px";
});
