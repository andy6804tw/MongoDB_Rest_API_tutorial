# Part 5, Add passport-jwt and send less information about the user

- Create a secret password for the jwt
- Add passport-jwt and create the strategy
- Add jsonswebtoken library
- How can I send less info to the front end ? Like I don't want to send the password

1. 安裝套件
JSON Web Token (JWT)取代傳統token驗證使用者身份
```
$ yarn add jsonwebtoken passport-jwt
```
登入並給予一個jwt
```js
const token = jwt.sign(req.user, 'my_serect_key')
```
解析jwt權限存取api (GET product)
```js
// Jwt strategy
const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  secretOrKey: constants.JWT_SECRET
}

const jwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
  try {
    const user = await User.findById(payload._id) // payload就是使用者資料

    if (!user) {
      return done(null, false)
    }

    return done(null, user)
  } catch (e) {
    return done(e, false)
  }
})

passport.use(jwtStrategy)
```

## API Router

### 1. 
path: http://localhost:3000/api/v1/users/signup 

method: POST

Parameters (body) :
```
email: quapni10@mail.com
password: Passwoord10
firstName: Pick
lastName: Wo
userName: Pick Wo
```

return:
```
{
    "_id": "59fed360fb2efa7b5392718d",
    "userName": "Pick Wo",
    "token": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWZlZDM2MGZiMmVmYTdiNTM5MjcxOGQiLCJpYXQiOjE1MDk4NzI0ODB9.VDfuq2mX_4sYZhdN_N3pMGDb0QEHT-2mLaJgkqdBj40"
}
```
### 2. 
path: http://localhost:3000/api/v1/users/signup 

method: POST

Parameters (body) :
```
email: quapni10@mail.com
password: Passwoord10
```

return:
```
{
    
    "_id": "59fed360fb2efa7b5392718d",
    "userName": "Pick Wo",
    "token": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWZlZDM2MGZiMmVmYTdiNTM5MjcxOGQiLCJpYXQiOjE1MDk4NzI1NDR9.9kYiLoTKVBt7f2VBLkMOhTdhEMjShuJ2YeXjQY5UTIA"

}
```

### 3. 
path: http://localhost:3000/api/v1/users/signup 

method: GET

Parameters (headers) :
```
JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWZlZDM2MGZiMmVmYTdiNTM5MjcxOGQiLCJpYXQiOjE1MDk4NzI1NDR9.9kYiLoTKVBt7f2VBLkMOhTdhEMjShuJ2YeXjQY5UTIA
```

return:
```
This is a private route!!!!
```
