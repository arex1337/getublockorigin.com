A website that redirects the user to an appropriate [uBlock Origin](https://github.com/gorhill/uBlock) download page, based on their browser.

Uses [detect-browser](https://github.com/DamonOehlman/detect-browser)

To install dependencies:
npm install

To install [browserify](https://github.com/browserify/browserify):
npm install -g browserify

To build:
browserify index.js > bundle.js

Deploy index.html and bundle.js.
