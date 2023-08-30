let bulb = document.querySelector("#bulb");

let test;

let btn = document.querySelector("button");

let flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    bulb.style.backgroundColor = "red";
    flag = 1;
  } else {
    bulb.style.backgroundColor = "transparent";
    flag = 0;
  }
});

let go = document.querySelectorAll("h1");
console.log(go);

go.forEach(function (par) {
  console.log(par);
});

let boxxx = document.getElementById("box");

boxxx.innerHTML = "<h2>green</h2>";
boxxx.style.height = "700px";
boxxx.style.backgroundColor = "blue";
boxxx.style.width = "200px";
