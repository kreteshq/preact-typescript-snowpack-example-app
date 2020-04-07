# README

## Getting Started

### Using VS Code (Recommended)

The application provides VS Code tasks to run both server & client parts.

You can start Huncwot `Server` and `Client` tasks from <kbd>Tasks: Run Task</kbd> menu in Command Palette.

![](https://user-images.githubusercontent.com/200613/75420768-06c80080-5939-11ea-9824-716baa286bb7.gif)

### Using CLI

1. Install dependencies

```
npm install
```

2. Start the server

```
huncwot server      # you can also use `hc` instead of `huncwot`
```

3. Start the client

```
huncwot client
```

4. Go to [localhost:5544](http://localhost:5544) to see the application running

## Architecture

### TypeScript

This application uses TypeScript on the front-end and on the back-end. This way you have not only one programming language to learn, but also you use one ecosystem of libraries when building web applications.

### Snowpack

Huncwot provides first-class support for [Snowpack](https://www.snowpack.dev/) so that you can build modern web applications (using React, Vue et al) without a bundler (like Webpack, Parcel or Rollup). Instead, you use [ECMAScript modules](https://caniuse.com/#search=modules).

### Preact

Preact is a fast 3kB alternative to React.js that comes with the same modern API.  Preact can be used directly in the browser without any transpilation steps. In addition, the libraries provides various improvements such as raw HTML attribute/property names (i.e. `class` instead of `className`) or arguments in `Component.render()`.
