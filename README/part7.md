### Part 7, Get a post by his id and get all of them

- Create the controller, route
- Add http-status library
- Populate User
- User toAuthJSON vs toJSON

1. HTTP-status
狀態碼
```
$ yarn add http-status
```

```js
res.status(HTTPStatus.OK).json(req.user.toAuthJSON())
HTTPStatus.CREATED => 201
HTTPStatus.BAD_REQUEST => 400
HTTPStatus.INTERNAL_SERVER_ERROR => 500
HTTPStatus.OK) => 200

```
## API Router

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

