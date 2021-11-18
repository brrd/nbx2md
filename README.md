# nbx2md

Convert [nullboard](https://github.com/apankrat/nullboard) NBX files to markdown.

## Installation

```sh
npm install -g nbx2md
```

## Usage

```sh
nbx2md path/to/input.nbx path/to/output.md
```

You can also use it programmatically:

```sh
npm install --save nbx2md
```

```js
const nbx2md = require("nbx2md");
const md = nbx2md(data);
```

## License

The MIT License (MIT) - Copyright (c) 2021 Thomas Brouard