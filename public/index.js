import Didact from "../didact";
const rootDom = document.getElementById("root");

function tick() {
  const time = new Date().toLocaleTimeString();
  /** @jsx Didact.createElement */

  const element = Didact.createElement("h1", null, time);
  const container = document.getElementById("root");
  Didact.render(element, container);
}

tick();
setInterval(tick, 1000);
