#!/bin/sh

npm install mocha
mkdir test
touch test/chat-service.test.js
./node_modules/.bin/mocha