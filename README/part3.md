# Part 3, Users creation

- Create the user model, controller and routes
- Install robomongo, postman
- Add joi for validation with express-validation

1. 建立Schema
```js
import mongoose, { Schema } from 'mongoose'
const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required!'],
      trim: true,
      validate: {
        validator(email) {
          return validator.isEmail(email)
        },
        message: '{VALUE} is not a valid email!'
      }
    },
    firstName: {
      type: String,
      required: [true, 'FirstName is required!'],
      trim: true
    },
    lastName: {
      type: String,
      required: [true, 'LastName is required!'],
      trim: true
    },
    userName: {
      type: String,
      required: [true, 'UserName is required!'],
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Password is required!'],
      trim: true,
      minlength: [6, 'Password need to be longer!'],
      validate: {
        validator(password) {
          return passwordReg.test(password) // 正則表達
        },
        message: '{VALUE} is not a valid password!'
      }
    },
    favorites: {
      posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
      }]
    }
  },
  { timestamps: true },
)
```
2. 正則表示
 
 ```
 $ yarn add validator
 ```
使用正則表達式 [測試網站](https://regexr.com)
```js
const validator = require('validator')

const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/  //這是自定義 validate
console.log('Server running on port:'+passwordReg.test('F1dfsdf'))  // true
console.log('Server running on port:'+validator.isEmail("andy6804tw@mail.com"))
```
3. joi條件檢查
```
$ yarn add joi
$ yarn add express-validation
```
