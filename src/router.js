const express = require('express')
const db = require('./database/db')
const route = express.Router()

//home
route.get("/", (req,res) => {
    return res.render("index.html")
})

//formulario
route.get("/formulario", (req,res) => {

    return res.render("form.html")
})

//recebendo dados
route.post("/save-point", (req, res) => {
    
    console.log(req.body);

    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES ( ?,?,?,?,?,?,? );
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]
    function after(err) {
        if(err){
            return console.log(err)
        }
        console.log("cadastrado com sucesso")
        console.log(this)

        return res.render("form.html", {
            saved: true
        })
    }
    db.run(query, values, after)
})

//coletas
route.get("/pontos-de-coleta", (req,res) => {

        const search = req.query.search

            if(search == '') {
                return res.render("coletas.html", {
                    total: 0
            })
        }
    
        db.all(`SELECT * FROM places WHERE city LIKE '%${search}%' `, function(err, rows) {
            if(err) {
                return console.log(err)
            }
            
            const total = rows.length
            
            //exibindo a pagina dinamicamente
            return res.render("coletas.html", {
                places: rows,
                total: total
        })
    })
})

module.exports = route;

