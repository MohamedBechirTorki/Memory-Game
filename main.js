let imgs = document.querySelectorAll("img");
let attempts = document.getElementById("attempts");
let att = 0;
let win = 0;
let button = document.querySelector("button");
button.onclick = () => {
  window.location.reload();
};
let finish = document.querySelector(".finish");
let score2 = document.querySelector("span.score");
const srcs = [
  "images/ben10.jpg",
  "images/blue.png",
  "images/BUTTERCUP.png",
  "images/catdog.jpg",
  "images/dora.png",
  "images/spong.png",
  "images/tom.jpg",
  "images/yellow.jpg",
  "images/ben10.jpg",
  "images/blue.png",
  "images/BUTTERCUP.png",
  "images/catdog.jpg",
  "images/dora.png",
  "images/spong.png",
  "images/tom.jpg",
  "images/yellow.jpg",
];
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
shuffle(srcs);

let ar = [];
let arr = [];
let score = document.getElementById("score");

for (let i = 0; i < imgs.length; i++) {
  imgs[i].onclick = function () {
    att++;
    imgs[i].src = srcs[i];
    if (ar.indexOf(i) === -1) {
      ar.push(i);
      arr.push(srcs[i]);
    }
    if (arr.length === 2) {
      if (arr[0] === arr[1]) {
        console.log("yes");
        score.textContent = Number.parseInt(score.textContent) + 100;
        win++;
        if (win === 8) {
          attempts.textContent = att;
          score2.textContent = score.textContent;
          finish.style.display = "flex";
        }
      } else {
        console.log("no");
        score.textContent = Number.parseInt(score.textContent) - 25;
        ar.map((ele) => {
          window.setTimeout(function () {
            imgs[ele].src = "images/hidden.png";
          }, 1000);
        });
      }
      [arr, ar] = [[], []];
    }
  };
}
