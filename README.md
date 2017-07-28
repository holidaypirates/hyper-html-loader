# hyperhtml-loader
[HyperHTML](https://github.com/WebReflection/hyperHTML) loader for webpack

turns

```html
<span>${state.value}</span>
```

into

```js
module.exports = (render, scope) => render`
  <span>${state.value}</span>
`
```

## Usage

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.hyper.html?$/,
        use: [
          {
            loader: 'hyperhtml-loader'
          },
        ]
      },
      ...
    ],
  },
  ...
};
```

### Options

**variable**: scope variable name (default `scope`)
