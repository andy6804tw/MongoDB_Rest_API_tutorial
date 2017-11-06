### Part 6, Creation of a post

- Create the post model
- Add the user id as the author
- Resolve error I did with joi

1. using slug
- slugifies every string, even when it contains unicode
```
$ yarn add slug
```
slug("this is title")

2. mongoose-unique-validator
檢查該值是否唯一並給出log
```
$ yarn add mongoose-unique-validator
```

## API Router
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

