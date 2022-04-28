# Express Typescript Boilerplate


### Set up project with typescript:
``` bash
$ npm install typescript -D
$ npm install @types/node @types/express -D
$ tsc -init
```

<details>
<summary><strong>Debugger VSCode</strong></summary>

```json
{
  "configurations": [
  {
    "name": "Attach",
    "port": 9229,
    "request": "attach",
    "skipFiles": [
      "<node_internals>/**"
    ],
    "type": "pwa-node"
  }
  ]
}
```
</details>
