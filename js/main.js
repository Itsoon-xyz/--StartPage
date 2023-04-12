// Card Animation

const el = document.querySelector(".card");
const wrap = document.querySelector(".card__wrapper");
let w = el.clientWidth;
let h = el.clientHeight;
let b = el.getBoundingClientRect();
el.addEventListener("mousemove", (e) => {
  let X = (e.clientX - b.left) / w;
  let Y = (e.clientY - b.top) / h;

  let rX = -(X - 0.5) * 26;
  let rY = (Y - 0.5) * 26;

  let bgX = 40 + 20 * X;
  let bgY = 40 + 20 * Y;

  console.log(X, Y);
  document.documentElement.style.setProperty("--x", 100 * X + "%");
  document.documentElement.style.setProperty("--y", 100 * Y + "%");

  document.documentElement.style.setProperty("--bg-x", bgX + "%");
  document.documentElement.style.setProperty("--bg-y", bgY + "%");

  document.documentElement.style.setProperty("--r-x", rX + "deg");
  document.documentElement.style.setProperty("--r-y", rY + "deg");

  el.addEventListener("mouseleave", (e) => {
    setTimeout(() => {
        document.documentElement.style.setProperty("--x", "50%");
        document.documentElement.style.setProperty("--y", "50%");
        document.documentElement.style.setProperty("--bg-x", "50%");
        document.documentElement.style.setProperty("--bg-y", "50%");
        document.documentElement.style.setProperty("--r-x", "0deg");
        document.documentElement.style.setProperty("--r-y", "0deg");
    },100)
  });
});
