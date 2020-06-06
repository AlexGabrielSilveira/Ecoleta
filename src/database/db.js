const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db
db.serialize(() => {

    //criar tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT ,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // //consultar dados na tabela
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("registros :")
    //     console.log(rows)
    // })

    //deletar dados
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err, rows){
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("registro deletado com sucesso")
    //     console.log(rows);
    // })
    
    
})