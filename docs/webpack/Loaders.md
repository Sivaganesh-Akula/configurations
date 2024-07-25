# Loaders

Loaders are transformations that are applied to the source code of a module. They allow you to pre-process files as you import or “load” them.

- Loaders can be chained
- Loaders can be synchronous or asynchronous
- Loaders run in Node.js and can do everything that’s possible there
- Loaders can be configured with an options object
- Plugins can give loaders more features
- Loaders can emit additional arbitrary files

## syntax

```
// Inside config file
module: {
  rules: [
    {
      // file extensions that the loader apply transformations
      test: /\.ts$/,
      // actual loader
      use: 'ts-loader'
    }
  ]
}

// Inline config - while importing into another file
import Styles from 'style-loader!css-loader?modules!./styles.css';
```

## Pre-Loaders

Pre-loaders run before the regular loaders. They are used for tasks like linting and code formatting.

```
{
  enforce: 'pre',      // Specify this is a pre-loader
  test: /\.js$/,       // Match all .js files
  exclude: /node_modules/,
  use: 'eslint-loader', // Use eslint-loader to lint JavaScript files
},
```

## Post-Loaders

Post-loaders run after the regular loaders. They are useful for tasks like applying specific transformations or optimizations after the main processing is done.

```
{
  enforce: 'post',     // Specify this is a post-loader
  test: /\.js$/,       // Match all .js files
  exclude: /node_modules/,
  use: 'another-loader', // Use another-loader as a post-loader
},
```

## Using Loaders

- **Configuration:** (recommended): Specify them in your webpack.config.js file.

- **Inline:** Specify them explicitly in each import statement.

### Configuration

- 📌 Loaders are evaluated/executed from right to left (or from bottom to top).

  In the example below execution starts with sass-loader, continues with css-loader and finally ends with style-loader

  #### Example:

  ```
  module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            { loader: 'sass-loader' },
          ],
        },
      ],
    },
  }
  ```

### Inline

It's possible to specify loaders in an import statement, or any equivalent "importing" method. Separate loaders from the resource with !. Each part is resolved relative to the current directory.

`import Styles from 'style-loader!css-loader?modules!./styles.css';`

It's possible to override any loaders, preLoaders and postLoaders from the configuration by prefixing the inline import statement:

Prefixing with ! will disable all configured normal loaders

`import Styles from '!style-loader!css-loader?modules!./styles.css';`

Prefixing with !! will disable all configured loaders (preLoaders, loaders, postLoaders)

`import Styles from '!!style-loader!css-loader?modules!./styles.css';`

Prefixing with -! will disable all configured preLoaders and loaders but not postLoaders

`import Styles from '-!style-loader!css-loader?modules!./styles.css';`
