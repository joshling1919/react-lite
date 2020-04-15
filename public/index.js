/* This is where the Didact library code ends! Everything below is content that 
should be rendered onto the DOM */
import Didact from "../diact";
/** @jsx Didact.createElement */

const element = Didact.createElement("div", {
  id: "foo"
}, Didact.createElement("a", null, "bar"), Didact.createElement("b", null));
const container = document.getElementById("root");
Didact.render(element, container);
