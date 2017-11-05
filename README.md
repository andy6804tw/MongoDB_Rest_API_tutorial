# Make a NodeJS rest api

### Part 1, Setup the tools

[Link](./README/part1.md)

- Add mongoose, body-parser, morgan, compression, helmet
- Setup config folder
- Setup constants
>Mission: 建立環境使用babbel轉換ES6語法並使用webpack打包工具 

### Part 2, Setup of the middlewares and mongodb

[Link](./README/part2.md)

- Add mongoose, body-parser, morgan, compression, helmet
- Setup config folder
- Setup constants
>Mission: 建立 middlewares 和安裝 mongodb 環境

### Part 3, Users creation

[Link](./README/part3.md)

- Create the user model, controller and routes
- Install robomongo, postman
- Add joi for validation with express-validation
>Mission: 建立user資料庫模型、設定user(router、controller)、加入joi驗證

### Part 4, Add bcrypt and passport

[Link](./README/part4.md)

- Add rimraf and clean dist on webpack build
- Crypt the user password
- Create the localStrategy with passport
- Can log a user
>Mission: 使用bcrypt打亂密碼、rimraf指令移除檔案、passport(middleware)驗證登入

### Part 5, Add passport-jwt and send less information about the user

[Link](./README/part5.md)

- Create a secret password for the jwt
- Add passport-jwt and create the strategy
- Add jsonswebtoken library
- How can I send less info to the front end ? Like I don't want to send the password
>Mission: 使用者登入產生jwt token進入每條api前驗證允許存取該api
