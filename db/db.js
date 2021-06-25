const mysql = require('mysql');

module.exports = {
    connection: null,
    init(){
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'user',
            password: '',
            database: 'f1db'
        });

        this.connection.connect((err) => {
            if(err){
                console.error(`Error: ${err}`);
            }
            else{
                console.log('Connected!');
            }
        });

        this.connection.query('SELECT * FROM drivers WHERE number IS NOT NULL',(err,results,fields) => {
            if(err){
                console.error(`Error: ${err}`);
            }

            console.log(results);
            console.log(fields);
        });
    }
}