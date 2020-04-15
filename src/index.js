/* This is where the Didact library code ends! Everything below is content that 
should be rendered onto the DOM */
import Didact from "../diact";

/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);

const container = document.getElementById("root");
Didact.render(element, container);
