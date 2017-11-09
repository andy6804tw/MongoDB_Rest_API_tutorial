### Part 9, Update a post if author of it

- Create the route and controller
- Create a validation field


## API Router

### 7. 
path: http://localhost:3000/api/v1/posts/59ffcfe52c992514dddc5d42

method: PATCH

Parameters (body) :
```
title: This Title
text: this is text6
```

Parameters (headers) :
```
authorization:
JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWZlZDM2MGZiMmVmYTdiNTM5MjcxOGQiLCJpYXQiOjE1MDk4NzI1NDR9.9kYiLoTKVBt7f2VBLkMOhTdhEMjShuJ2YeXjQY5UTIA
```

return:
```
{
    "_id": "59ffcfe52c992514dddc5d42",
    "title": "This Title",
    "text": "this is text6",
    "createdAt": "2017-11-06T02:58:45.548Z",
    "slug": "this-title",
    "user": "59fed360fb2efa7b5392718d",
    "favoriteCount": 0
}
```
