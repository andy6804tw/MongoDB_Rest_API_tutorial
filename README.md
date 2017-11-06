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

### Part 6, Creation of a post

[Link](./README/part6.md)

- Create the post model
- Add the user id as the author
- Resolve error I did with joi
>Mission: 建立post資料表

### Part 7, Get a post by his id and get all of them

[Link](./README/part7.md)

- Create the controller, route
- Add http-status library
- Populate User
- User toAuthJSON vs toJSON
>Mission: 利用post id取得貼文資訊,使用http-status library
