# Part 4, Add bcrypt and passport

- Add rimraf and clean dist on webpack build
- Crypt the user password
- Create the localStrategy with passport
- Can log a user

1. 安裝rimraf套件
在node.js上，使用 rimraf 刪除所有子目錄，使用在每次產出dist前
```
$ yarn add -D rimraf
```
之後在package.json新增script並修改
```js
"scripts": {
    "clean": "rimraf dist",
    "dev:build": "yarn run clean &&webpack -w",
    "dev": "cross-env NODE_ENV=development nodemon dist/index.bundle.js"
  }
```

2. 安裝 bcrypt 套件
```
$ yarn add bcrypt-nodejs
```
bcrypt主要是將使用者註冊的帳號亂數打掉防止小人亂來
```js
const bcrypt = require('bcrypt-nodejs')
console.log(bcrypt.hashSync('Password1')) //將密碼變成亂數
console.log(bcrypt.compareSync(password, this.password)) //比較亂數後的密碼
```
>output: $2a$10$BokaUeqDttl0rXWF2UfOhOCIny6bA.AzMh34r2K88HritcA9YPAHy

3. 安裝 passport 套件

passport主要是利用middleware機制驗證登入帳戶
```
$ yarn add passport passport-local
```
記得在middleware引入並初始化
```js
import passport from 'passport'
app.use(passport.initialize())
```
輸入email和password在middleware做驗證

> service.js
```js
const passport=require('passport')
const LocalStrategy=require('passport-local')


const localOpts = {
  usernameField: 'email'
}

const localStrategy = new LocalStrategy(localOpts, async (email, password, done) => {
  try {
   
    console.log(email, password)
    
    const user={'email': email}

    return done(null, user)
  } catch (e) {
    return done(e, false)
  }
})

passport.use(localStrategy)

module.exports = passport.authenticate('local', { session: false })

```

> index.js
```js
const service = require('./service')
app.post('/login', service, (req, res) => {
  res.status(200).json(req.user) //返回使用者json(從middleware取得回傳)
})
```
