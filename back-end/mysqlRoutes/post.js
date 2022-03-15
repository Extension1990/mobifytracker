module.exports = function (app, connection) {

    // Add Group
    app.post('/add/group', (req, res) => {
        const group = req.body;
        connection.query('INSERT INTO myChatApp.groups SET ?', group, (err, rows) => {
            if (err) {
                res.status(404).send('Couldn not add group.');
            } else {
                res.status(200).send(rows);
            }
        });
    });
}