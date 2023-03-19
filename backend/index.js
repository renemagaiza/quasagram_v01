//dependences
const express = require('express')

//config - express
const app = express()

//endpoint - posts
app.get('/posts', (request, response) => {
    let posts = [
        {
            caption: 'Golden Gate',
            location: 'Inhambane, Mozambique'
        },
        {
            caption: 'Londom',
            location: 'Londom, USA'
        }
    ]
  response.send(posts)
})

//listen
app.listen(3000)