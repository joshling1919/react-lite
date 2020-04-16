# React Lite

Following along [Rodrigo Prombo](https://pomb.us)'s tutorial on how to
[build your own React](https://pomb.us/build-your-own-react/).

## Phase 0

I want to set it up to be somewhat similar to how I use React. Here are the basic set up goals:

1. Have a `src/index.js` file that holds something similar to what a typical React entrypoint file might hold.
2. Have a separate `public` directory that holds all of the content that should be served.

### `src/index.js` and `didact.js`

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

So, we would want our entry file at `src/index.js` to look something like:

```js
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

```

And then all of our own React Lite library logic would go in its own file. The
author of the guide calls the library `Didact`, so I'll create a file called
`didact.js` at the root of the directory and put all React-like logic that we're
creating in Didact into that file.

Then, in the entry `src/index.js`, I'll import the `Didact` library.

### `babel`

In the `src/index.js` there's a comment `@jsx Didact.createElement` about the
jsx that tells Babel to transpile the JSX into JavaScript using the
`Didact.createElement` method.

To get that to work, install `@babel/cli@^7.0.0`, `@babel/core@7.0.0`, and
`@babel/plugin-trnasform-react-jsx@7.0.0` as dev dependencies.
