let prostatus = document.querySelector("h5");
let btn = document.querySelector("#add");
let check = 0;

btn.addEventListener("click", () => {
  if (check == 0) {
    prostatus.innerText = "Friends";
    prostatus.style.color = "green";
    btn.innerText = "Remove Friend";
    btn.style.backgroundColor = "red";
    check = 1;
  } else {
    prostatus.innerText = "Stranger";
    prostatus.style.color = "red";
    btn.innerText = "Add Friend";
    btn.style.backgroundColor = "#227229";
    check = 0;
  }
});
