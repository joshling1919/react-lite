# React Lite

Following along [Rodrigo Prombo](https://pomb.us)'s tutorial on how to
[build your own React](https://pomb.us/build-your-own-react/).

## Phase 0:

I want to set it up to be somewhat similar to how I use React. Here are the basic set up goals:

1. Have a `src/index.js` file that holds something similar to what a typical React entrypoint file might hold.
2. Have a separate `public` directory that holds all of the content that should be served.

### `src/index.js`

Here's what a typical React entry file might look like:

```js
import React from "react";
import ReactDOM from "react-dom";

const element = (
  <div>
    <a>hello world</a>
  </div>
);

ReactDOM.render(element, document.querySelector("#root"));
```
