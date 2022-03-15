module.exports = function (app, connection) {

    // Register user
    app.post('/register', (req, res) => {
        const user = req.body;
        connection.query('INSERT INTO myChatApp.users SET ?', user, (err, rows) => {
            if (err) {
                res.status(404).send('Couldn not register user.');
            } else {
                res.status(200).send(rows);
            }
        });
    });

    app.post('/login', function(req, res) {
        
        let username = req.body.username;
        let password = req.body.password;
        
        if (username && password) {
            
            connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {

                if (error) throw error;

                if (results.length > 0) {
                    res.send(results);
                    console.log(results)
                } else {
                    res.send('Incorrect email and/or password!');
                }			
                res.end();
            });
        } else {
            res.send('Please enter Username and Password!');
            res.end();
        }
    });
}