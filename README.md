# Express Typescript Boilerplate

### Set up project with typescript:
``` bash
$ npm install express
$ npm install typescript -D
$ npm install @types/node @types/express -D
$ tsc -init
```

### To install and configure ESLint with Prettier

```sh
$ npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
$ npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

## Dependencies
Dependencies are managed through `package.json`.
In that file you'll find two sections:

### `dependencies`

| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| express                         | Node.js web framework                                                 |

### `devDependencies`

| Package                         | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| typescript                      |                                                                        |
| @types/express                  |                                                                        |
| ts-node-dev                     | The nodemon for TypeScript                                             |
