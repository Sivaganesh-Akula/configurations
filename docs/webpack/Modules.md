# Modules

In modular programming, developers break programs up into discrete chunks of functionality called a module.Each module has a smaller surface area than a full program, making verification, debugging, and testing trivial

webpack Module In contrast to Node.js modules. Webpack supports the following module types natively

- ECMAScript modules: An ES2015 `import` statement
- CommonJS modules: A CommonJS `require()` statement
- AMD modules: An AMD `define` and `require` statement
- Assets: An `@import` statement inside of a css/sass/less file, An image url in a stylesheet `url(...)` or HTML `<img src=...>` file.
- WebAssembly modules

## Module Resolution

### Absolute Paths

- `import '/home/me/file';`
- `import 'C:\\Users\\me\\file';`

### Relative paths

- `import '../src/file1';`
- `import './file2';`

### Module paths

- `import 'module';`
- `import 'module/lib/file';`
