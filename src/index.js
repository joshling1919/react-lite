import Didact from "../diact";

const rootDom = document.getElementById("root");

function tick() {
  const time = new Date().toLocaleTimeString();

  /** @jsx Didact.createElement */
  const element = <h1>{time}</h1>;

  const container = document.getElementById("root");
  Didact.render(element, container);
}

tick();
setInterval(tick, 1000);
