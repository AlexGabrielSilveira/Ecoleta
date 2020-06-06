const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const route = require('./router')

//config public
app.use(express.static("public"))

//template engine
nunjucks.configure("src/views", {
    express: app,
    noCache: true
})

//habilitar body
app.use(express.urlencoded({
    extended: true
}))

//routes
app.use(route)


app.listen('8080')



