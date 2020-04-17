# React Lite

Following along [Rodrigo Prombo](https://pomb.us)'s tutorial on how to
[build your own React](https://pomb.us/build-your-own-react/).

## Phase 0: Setup

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

The author of the guide calls the library `Didact`, so we would want our entry
file at `src/index.js` to look something like:

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

Then, we want a file called `didact.js` at the root of the directory and put all
React-like logic that we're creating in Didact into that file. All of our own
React Lite library logic would go in its own file.

### `babel`

Because we plan on using JSX, we need to set up babel to transpile any JSX into
raw JavaScript.

To get that to work, install `@babel/cli@^7.0.0`, `@babel/core@7.0.0`, and
`@babel/plugin-trnasform-react-jsx@7.0.0` as dev dependencies.

Then, set up a `build.sh` file that looks like this:

```sh
#!/bin/sh

npx babel src/index.js --out-file public/index.js

```

Add a `build` script to your `package.json` that simply runs `sh build.sh`.

### `public` directory

In the build script above, it transpiles `src/index.js` and outputs it into `public/index.js`. Set up the `public` directory with an `index.html` file inside.

The `index.html` file should have a `div` element with `id="root"`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script type="module" src="./index.js"></script>
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### `http-server`

In `index.html`, there is a `script` tag that references `public/index.js`,
which is output of transpiling `src/index.js`. It uses ES modules in order to
allow for the importing of `didact.js`.

To resolve some CORS issues, install [http-server] as a dev dependency. Set up a
`start` script in `package.json` that launches the `http-server`. By default,
`http-server` serves `public/index.html`.

At this point the `package.json` should look like this:

```json
{
  "name": "react-lite",
  "version": "1.0.0",
  "description": "React library from scratch",
  "main": "index.js",
  "scripts": {
    "build": "sh build.sh",
    "start": "http-server"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.9.0",
    "@babel/plugin-transform-react-jsx": "^7.9.4",
    "http-server": "^0.12.1"
  },
  "dependencies": {}
}
```

[http-server]: https://www.npmjs.com/package/http-server
