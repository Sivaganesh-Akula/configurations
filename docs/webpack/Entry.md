# Single Entry Syntax

## Usage: `entry: string | [string]`

- ✅ Quickly set up a webpack configuration for an application
- 🔴 There is not much flexibility in extending or scaling your configuration

### Example

```
  // single main entry
  entry: './path/to/my/entry/file.js',

  // single main entry with name alias
  entry: {
    main: './path/to/my/entry/file.js',
  },

  //  multi main entry
  entry: ['./src/file_1.js', './src/file_2.js'],

  // output
  output: {
    filename: 'bundle.js',
    // or if you configure entry with alias
    filename: '[name].bundle.js',
  },
```

# Object Syntax
