#!/bin/sh

npx babel src/index.js --out-file public/index.js
cp didact.js public/
