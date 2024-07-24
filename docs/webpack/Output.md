Configuring the output configuration options tells webpack how to write the compiled files to disk.

- The minimum requirement for the output property in your webpack configuration is to set its value to an object and provide an output.filename

```
// single bundle
output: {
    filename: 'bundle.js',
  }

// multiple bundle with multi entry files
// [name] -> entry name
output: {
    filename: '[name].js',
    // filename: "[name].random_name.js",
  }
```
