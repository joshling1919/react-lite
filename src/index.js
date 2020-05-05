import Didact from "/didact.js";

const rootDom = document.getElementById("root");

function tick() {
  const time = new Date().toLocaleTimeString();

  /** @jsx Didact.createElement */
  const element = <h1 className="time-header">{time}</h1>;

  const container = document.getElementById("root");
  Didact.render(element, container);
}

tick();
// setInterval(tick, 1000);
