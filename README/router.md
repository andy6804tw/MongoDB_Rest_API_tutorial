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
authorization:
JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWZlZDM2MGZiMmVmYTdiNTM5MjcxOGQiLCJpYXQiOjE1MDk4NzI1NDR9.9kYiLoTKVBt7f2VBLkMOhTdhEMjShuJ2YeXjQY5UTIA
```

return:
```
This is a private route!!!!
```

### 4. 
path: http://localhost:3000/api/v1/posts 

method: GET

Parameters (headers) :
```
authorization:
JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWZlZDM2MGZiMmVmYTdiNTM5MjcxOGQiLCJpYXQiOjE1MDk4NzI1NDR9.9kYiLoTKVBt7f2VBLkMOhTdhEMjShuJ2YeXjQY5UTIA
```

Parameters (body) :
```
title: this is title1
text: this is text1
```

return:
```
{
    "__v": 0,
    "updatedAt": "2017-11-06T00:49:43.430Z",
    "createdAt": "2017-11-06T00:49:43.430Z",
    "slug": "this-is-title10",
    "title": "this is title10",
    "text": "this is text10",
    "user": "59fed360fb2efa7b5392718d",
    "_id": "59ffb1a77e8d12013d791e1f",
    "favoriteCount": 0
}
```

### 5. 
path: http://localhost:3000/api/v1/posts/59ffba3cfbb440094088343d

method: GET

return:
```
{
    "_id": "59ffba3cfbb440094088343d",
    "title": "this is title4",
    "text": "this is text4",
    "createdAt": "2017-11-06T01:26:20.768Z",
    "slug": "this-is-title4",
    "user": {
        "_id": "59fed360fb2efa7b5392718d",
        "userName": "Pick Wo",
        "token": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWZlZDM2MGZiMmVmYTdiNTM5MjcxOGQiLCJpYXQiOjE1MDk5MzgxODl9.wOgr1vP9nzRC6s51I0yEks3QoNszCyMPn077co8ZQdY"
    },
    "favoriteCount": 0
}
```

