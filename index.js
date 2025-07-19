require('dotenv').config()
const express = require('express')
const app = express()
const port = 777
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const githubData = {
  "login": "DevValand",
  "id": 186467362,
  "node_id": "U_kgDOCx1EIg",
  "avatar_url": "https://avatars.githubusercontent.com/u/186467362?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/DevValand",
  "html_url": "https://github.com/DevValand",
  "followers_url": "https://api.github.com/users/DevValand/followers",
  "following_url": "https://api.github.com/users/DevValand/following{/other_user}",
  "gists_url": "https://api.github.com/users/DevValand/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/DevValand/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/DevValand/subscriptions",
  "organizations_url": "https://api.github.com/users/DevValand/orgs",
  "repos_url": "https://api.github.com/users/DevValand/repos",
  "events_url": "https://api.github.com/users/DevValand/events{/privacy}",
  "received_events_url": "https://api.github.com/users/DevValand/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Dev Valand",
  "company": null,
  "blog": "",
  "location": "Ahmedabad, Gujarat",
  "email": null,
  "hireable": null,
  "bio": "I am B.Sc.(CA+ IT) student at Ahmedabad.",
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 2,
  "following": 3,
  "created_at": "2024-10-27T10:24:07Z",
  "updated_at": "2025-07-19T06:37:31Z"
}

app.get('/facebook', (req,res) =>{
    res.send('plz,Login at facebook')
})
app.get('/login', (req,res) =>{
    res.send('<h1>plz,Login at Login Page</h1>')
})

app.get('/github', (req,res) =>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
