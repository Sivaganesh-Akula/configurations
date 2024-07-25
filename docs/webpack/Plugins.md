# Plugins

**Plugins** are the backbone of webpack. Webpack itself is built on the same plugin system that you use in your webpack configuration. They also serve the purpose of doing anything else that a **loader cannot do**.

A webpack plugin is a JavaScript object that has an apply method. This apply method is called by the webpack compiler, giving access to the entire compilation lifecycle.

Since plugins can take arguments/options, you must pass a new instance to the plugins property in your webpack configuration.

## Usage

```
plugins: [new pluginName(propObj?)]
```

## Example

```
plugins: [new ProgressPlugin(), new LogBuildPlugin()],
```
