import Didact from "../didact.js";
/** @jsx Didact.createElement */

const element = Didact.createElement("div", {
  id: "foo"
}, Didact.createElement("a", null, "bar"), Didact.createElement("b", null));
const container = document.getElementById("root");
Didact.render(element, container);
