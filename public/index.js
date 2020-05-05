import Didact from "/didact.js";
const rootDom = document.getElementById("root");

function tick() {
  const time = new Date().toLocaleTimeString();
  /** @jsx Didact.createElement */

  const element = Didact.createElement("h1", {
    className: "time-header"
  }, time);
  const container = document.getElementById("root");
  Didact.render(element, container);
}

tick(); // setInterval(tick, 1000);
