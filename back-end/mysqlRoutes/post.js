module.exports = function (app, connection) {

    // Add Group
    app.post('/add/group/', (req, res) => {
        const group = req.body;
        connection.query(`INSERT INTO myChatApp.groups SET ?`, group, (err, rows) => {
            if (err) {
                res.status(404).send('Couldn not add group.');
            } else {
                res.status(200).send(rows);
            }
        });
    });

    // Send chat message
    app.post('/send/chatMessage', (req, res) => {
        const message = req.body;
        connection.query('INSERT INTO myChatApp.messages SET ?', message, (err, rows) => {
            if (err) {
                res.status(404).send('Couldn not send chat message.');
                console.log(err)
            } else {
                res.status(200).send(rows);
            }
        });
    });
    // Send chat reply message
    app.post('/send/chatReply', (req, res) => {
        const reply = req.body;
        connection.query('INSERT INTO myChatApp.replies SET ?', reply, (err, rows) => {
            if (err) {
                res.status(404).send('Couldn not send reply message.');
                console.log(err)
            } else {
                res.status(200).send(rows);
            }
        });
    });

    // Send group message
    app.post('/send/groupMessage', (req, res) => {
        const message = req.body;
        connection.query('INSERT INTO myChatApp.group_messages SET ?', message, (err, rows) => {
            if (err) {
                res.status(404).send('Couldn not send group message.');
                console.log(err)
            } else {
                res.status(200).send(rows);
            }
        });
    });
}