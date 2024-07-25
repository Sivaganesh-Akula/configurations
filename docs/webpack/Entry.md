# Entry

## Single Entry Syntax

### Usage: `entry: string | [string]`

- ✅ Quickly set up a webpack configuration for an application
- 🔴 There is not much flexibility in extending or scaling your configuration

### Config

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

## Object Syntax

### Usage: `entry: { <entryChunkName> string | [string] } | {}`

- ✅ The object syntax is more verbose and scalable way of defining entry entries

- 🔴 `runtime` and `dependOn` should not be used together on a single entry

- 🔴 `runtime` name should not collide with other entry names

### Entry Description object

- **`dependOn`**: The entry points that the current entry point depends on.

  - **Example:** node_modules, lodash, jquery etc.., as separate bundles if req

- **`filename`**: Specifies the name of each output file on disk.

- **`import`**: Module(s) that are loaded upon startup

- **`library`**: to specify the name for the chunk if it has multiple exports

  - **Example:** suppose BasicCalc bundle with sum, sub, div, mul function exported, we attach a name for all function using library.name - BasicCalc.sum(), BasicCalc.sub() etc..,

- **`runtime`**: Option creates a separate runtime file with webpack code in it, instead of writing in to our main bundle file.

- **`publicPath`** Specify a public URL address for the output files of this entry when they are referenced in a browser

### Config

```
entry: {
    // If filename key is not available in output
    // then the key given in entry is taken as output file name
    // example below dateUtils is the the output filename generated
    dateUtils: "./src/dateUtils.js",
    stringUtils: "./src/stringUtils.js",
    main: {
      import: "./src/main.js",
      runtime: "main-runtime",
      // dependOn: "dateUtils",
      // file name given in entry itself instead of giving then in output
      // filename: "mainFileNameInEntry.objectSyntaxDescriptionEntry.js",
    },
    admin: {
      import: "./src/admin.js",
      dependOn: ["dateUtils", "stringUtils"],
      // requires to enable experiments: {outputModule: true}
      library: { name: "AdminLibrary", type: "amd" },
      // file name given in entry itself instead of giving then in output
      // filename: "adminFileNameInEntry.objectSyntaxDescriptionEntry.js",
    },
  },
```
