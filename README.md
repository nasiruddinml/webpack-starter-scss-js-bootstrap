<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <br>
  <br>
  <h1>Webpack Starter scss-js-ts-tsx-jsx-bootstrap</h1>
  <p>
    webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
  </p>
</div>

# Webpack Starter scss-js-ts-tsx-jsx-bootstrap

A simple **webpack 4 starter project** for your basic web development needs.

## Table of Contents

- [Motivation](#motivation)
- [Features](#features)
- [Requirements](#requirements)
- [Usage](#usage)
- [FAQ](#faq)
  - [When should I use this starter?](#when-should-i-use-this-starter)
  - [Where's the common webpack config?](#wheres-the-common-webpack-config)
  - [How to load images](#how-to-load-images)
    - [In JavaScript](#in-javascript)
    - [In `index.html`](#in-indexhtml)

## Motivation

I needed to make a plain ol' "drop your mail to stay updated of ongoing developments" page.

I did not need anything fancy, no frontend framework, no unit testing, simply a **starter project that would let me use sass, ES6, Typescript, load assets, add vendor prefixes, start a dev server, generate sourcemaps and optimize everything for production.**

I looked around and all I found were heavily specialized and complicated webpack starter projects (`webpack-angular-starter`, `webpack-react-starter`, etc) that are so intertwined with plugins that stripping undesired functionality is almost impossible.

So I did this.

## Features

- Separated development and production webpack settings you can understand
- Sass
- ES6
- Typescript
- Asset loading
- CSS Vendor prefixing
- Development server
- Sourcemaps
- Production optimizations

## Requirements

- [Node](https://nodejs.org)

## Usage

Substitute `PROJECT-NAME` for your project name.

Clone the repository

```sh
 git clone https://github.com/nasiruddinml/webpack-starter-scss-js-bootstrap.git PROJECT-NAME
 cd PROJECT-NAME
```

Install npm dependencies

```sh
 npm install
```

**After installed npm packages**

To start the development server

```sh
npm run watch
```

To build for production

```sh
npm run build
```

To build for developement

```sh
npm run start
```

## FAQ

### When should I use this starter?

You should use this starter if any of the following are true:

- You want to make a static page. e.g. splash screen, onboarding screen, phaser game, threejs visualization, countdown.
- You found no good starter kit for whatever you want to do and need a solid place to start from.

**Please note**: If you are going to use a frontend framework like angular or react, you can of course add the required plugins and
configuration but it's normally complicated and quirky enough that it's highly recommended to use one of the existing
starter projects such as [create-react-app](https://github.com/facebook/create-react-app) or for angular projects the [angular-cli](https://github.com/angular/angular-cli).

### Where's the common webpack config?

**There is none and that is good thing.**

The pattern creates unnecessary confusion over the setup, at the end the config will always be different across environments.
People just put booleans everywhere on the common config to switch between these differing configuration options which is just awful to see and confusing for someone who's just starting on webpack.

The only truly shared config between these files are the entry js point and the main html template.

### How to load images

Just put your image within below folder.

```sh
assets/images/
```

#### In JavaScript

You can require an image from JavaScript like

```js
const myImage = require("./assets/icon.png");
```

If the image size in bytes is smaller than `8192`you, `myImage` will be a string with the encoded image path such as

```
data:image/svg+xml;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJhc3NldHMvaW1hZ2VzL3RpY2stQ3lydkhSdi5zdmciOw==
```

If the image size is larger than `8192` it will be a string with the url to the image such as

```
src/assets/icon.png?hash=5b1f36bc41ab31f5b801
```

This limit is set so images like icons are not loaded through a request but you can force the loader to give you image urls always by doing the following but should not be necessary. The limit works 90% of the time.

```js
const myImage = require("!!url!/assets/icon.png");
```

#### In `index.html`

If you would like to include an image on your `index.html` file, place the path of the image in a webpack require statement`<%= require(imagePath) %>`.

```html
  <img class="splash-title__img"
                     src="../assets/images/your-image.png"
                     alt="webpack logo"></a>
```

Start the development server and `voilà`.

```sh
npm run watch
```

To build for production

```sh
npm run build
```

To preview the development build

```sh
npm run start
```

Would like to add new feature to the list? Open an issue!

---

Author [Md Nasir Uddin](www.mnuworld.com)
