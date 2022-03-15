module.exports = function (app, connection) {
    
    // Get users
    app.get('/users', (req, res) => {
        const user = req.body;
        connection.query(`SELECT * FROM myChatApp.users`, user, (err, rows) => {
            if (err) {
                res.status(400).send('Users Not Found')
            } else {
                res.status(200).send(rows)
            }
        });
    });

    // Get userById
    app.get('/users/:id', (req, res) => {
        const user = req.body;
        connection.query(`SELECT * FROM myChatApp.users WHERE id ? = ${req.params.id}`, user, (err, rows) => {
            if (err) {
                res.status(400).send('Users Not Found')
            } else {
                res.status(200).send(rows)
            }
        });
    });

    // Get user groups
    app.get('/groups/:id', (req, res) => {
        const groups = req.body;
        connection.query(`SELECT * FROM myChatApp.groups WHERE userId ? = ${req.params.id}`, groups, (err, rows) => {
            if (err) {
                res.status(400).send('Groups Not Found')
            } else {
                res.status(200).send(rows)
            }
        });
    });

    // Get group messages
    app.get('/groupMessages/:groupId', (req, res) => {
        const messages = req.body;
        connection.query(`SELECT * FROM myChatApp.group_messages WHERE groupId ? = ${req.params.groupId}`, messages, (err, rows) => {
            if (err) {
                res.status(400).send('Messages Not Found')
            } else {
                res.status(200).send(rows)
            }
        });
    });

    // Get user chats
    app.get('/chats/:userId/:receiverId', (req, res) => {
        const messages = req.body;
        connection.query(`SELECT * FROM myChatApp.messages WHERE userId ? = ${req.params.userId} && ${req.params.receiverId}`, messages, (err, rows) => {
            if (err) {
                res.status(400).send('Messages Not Found')
            } else {
                res.status(200).send(rows)
            }
        });
    });
}