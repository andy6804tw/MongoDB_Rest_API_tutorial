# Part 8, Get all posts with a list statics method

Create the controller
Create a list statics method on post

## API Router

### 6. 
path: http://localhost:3000/api/v1/posts?limit=0&skip=1

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
