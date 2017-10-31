# Part 1 setup the tools
- editorconfig
- express
- eslint
- babbel
- webpack2

1. inital enviroment
```
$ yarn init -y
```

$ yarn add express
$ yarn add cross-env
$ yarn add -D babel-preset-env babel-plugin-transform-object-rest-spread
$ yarn add -D webpack babel-core babel-loader webpack-node-externals
$ yarn add -D nodemon

2. 安裝VS Code擴充套件[ EditorConfig 和 EditorConfigGenerator ]
shift+command+p 輸入editorconfig: Generator新增.editorconfig文件
這個套件可以規範一些團隊coding style並且自動偵測幫你修改小問題ex:換行、空白

3. 安裝VS Code擴充套件[ ESLint ]
他也是規範團隊coding style 不過這邊以airbnb 所規範的js
詳情請看另一篇[教學](https://github.com/andy6804tw/ESLint_tutorial)
