const stars = () => {
  let count = 20;
  let scene = document.querySelector(".scene");

  for (i = 0; i < count; i++) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);

    let duration = Math.random() * 1;
    let h = Math.random() * 100;

    star.style.left = x + "px";
    star.style.width = 1 + "px";
    star.style.height = 50 + h + "px";
    star.style.animationDuration = duration + "s";

    scene.appendChild(star);
  }
};
const rocketMove = () => {
  document.addEventListener("mousemove", (e) => {
    const rocket = document.querySelector(".rocket");
    rocket.style.left = e.offsetX + "px";
    rocket.style.top = e.offsetY + "px";
  });
};
const app = () => {
  stars();
  rocketMove();
};

app();
