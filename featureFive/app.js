let stories = document.querySelector("#stories");
let arr = [
  {
    dp: "https://img.freepik.com/free-photo/dumpy-frog-litoria-caerulea-green-leaves-dumpy-frog-branch-tree-frog-branch_488145-3603.jpg?size=626&ext=jpg&ga=GA1.1.2027056777.1693113503&semt=ais",
    story:
      "https://img.freepik.com/free-photo/many-various-fish_628469-342.jpg?size=626&ext=jpg&ga=GA1.1.2027056777.1693113503&semt=ais",
  },
  {
    dp: "https://img.freepik.com/free-photo/jellyfish-water-tank_1150-12621.jpg?size=626&ext=jpg&ga=GA1.2.2027056777.1693113503&semt=ais",
    story:
      "https://img.freepik.com/free-photo/vertical-shot-beautiful-corals-sea_181624-4281.jpg?size=626&ext=jpg&ga=GA1.1.2027056777.1693113503&semt=ais",
  },
  {
    dp: "https://img.freepik.com/free-photo/vertical-shot-whale-enjoying-bright-sun-rays-sliding-underwater_181624-44928.jpg?size=626&ext=jpg&ga=GA1.1.2027056777.1693113503&semt=ais",
    story:
      "https://img.freepik.com/free-photo/shark-tank_1150-17972.jpg?size=626&ext=jpg&ga=GA1.2.2027056777.1693113503&semt=ais",
  },
  {
    dp: "https://img.freepik.com/free-photo/dumpy-frog-litoria-caerulea-green-leaves-dumpy-frog-branch-tree-frog-branch_488145-3603.jpg?size=626&ext=jpg&ga=GA1.1.2027056777.1693113503&semt=ais",
    story:
      "https://img.freepik.com/free-photo/many-various-fish_628469-342.jpg?size=626&ext=jpg&ga=GA1.1.2027056777.1693113503&semt=ais",
  },
  {
    dp: "https://img.freepik.com/free-photo/jellyfish-water-tank_1150-12621.jpg?size=626&ext=jpg&ga=GA1.2.2027056777.1693113503&semt=ais",
    story:
      "https://img.freepik.com/free-photo/vertical-shot-beautiful-corals-sea_181624-4281.jpg?size=626&ext=jpg&ga=GA1.1.2027056777.1693113503&semt=ais",
  },
  {
    dp: "https://img.freepik.com/free-photo/vertical-shot-whale-enjoying-bright-sun-rays-sliding-underwater_181624-44928.jpg?size=626&ext=jpg&ga=GA1.1.2027056777.1693113503&semt=ais",
    story:
      "https://img.freepik.com/free-photo/shark-tank_1150-17972.jpg?size=626&ext=jpg&ga=GA1.2.2027056777.1693113503&semt=ais",
  },
];
let clutter = "";

arr.forEach(function (ele, idx) {
  clutter += `<div class="story"><img id="${idx}" src="${ele.dp}" alt="" /></div>`;
});

// console.log(clutter);
stories.innerHTML = clutter;

stories.addEventListener("click", (dets) => {
  let value = arr[dets.target.id].story;
  document.querySelector("#fullScreen").style.display = "block";

  document.querySelector("#fullScreen").style.backgroundImage = `url(${value})`;
  setTimeout(() => {
    document.querySelector("#fullScreen").style.display = "none";
  }, 2000);
});
