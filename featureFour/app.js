let elems = document.querySelectorAll(".elem");
// let elem1 = document.getElementById("elem1");
// // let elem1Img = elem1.lastElementChild;
// let elem1Img = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove", (dets) => {
//   elem1Img.style.left = dets.x + "px";
//   elem1Img.style.top = dets.y + "px";
// });
// elem1.addEventListener("mouseenter", (dets) => {
//   elem1Img.style.opacity = 1;
// });
// elem1.addEventListener("mouseleave", (dets) => {
//   elem1Img.style.opacity = 0;
// });

// for (item of elems) {
//   item.addEventListener("mousemove", (dets) => {
//     let elem1Img = item.lastElementChild;
//     elem1Img.style.left = dets.x + "px";
//     elem1Img.style.top = dets.y + "px";
//   });
// }

elems.forEach(function (val) {
  val.addEventListener("mouseenter", function () {
    val.lastElementChild.style.opacity = 1;
  });
  val.addEventListener("mouseleave", function () {
    val.lastElementChild.style.opacity = 0;
  });
  val.addEventListener("mousemove", (dets) => {
    val.lastElementChild.style.left = dets.x + "px";
    // val.lastElementChild.style.top = dets.y + "px";
  });
});
