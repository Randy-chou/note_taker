const fs = require("fs");
const uniqid = require('uniqid');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', 'utf8', (error, data) =>
            error ? console.error(error) : res.json(JSON.parse(data))
        );
    });

    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        newNote.id = uniqid();
        fs.readFile('./db/db.json', 'utf8', (error, data) => {
            if (error) {
                console.error(error)
            } else {
                let tempArray = JSON.parse(data);
                tempArray.push(newNote);
                fs.writeFile('./db/db.json', JSON.stringify(tempArray, null, '    '), (err) =>
                    err ? console.error(err) : res.json(newNote)
                )
            }
        })
    });

    app.delete('/api/notes/:id', (req, res) => {
        const chosenID = req.params.id;
        fs.readFile('./db/db.json', 'utf8', (error, data) => {
            if (error) {
                console.error(error)
            } else {
                tempArray = JSON.parse(data);
                for (let i = 0; i < tempArray.length; i++) {
                    if (chosenID === tempArray[i].id) {
                        tempArray.splice(i, 1);
                    }
                }
                fs.writeFile('./db/db.json', JSON.stringify(tempArray, null, '    '), (err) =>
                    err ? console.error(err) : res.end()
                )
            }
        })
    });
}