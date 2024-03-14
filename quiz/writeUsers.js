const express = require('express')
const fs = require('fs');
const path = require('path');
const router = express.Router()

router.post('/addUser', (req, res) => {
    let newUser = req.body;
    req.users.push(newUser);
    fs.writeFile(path.resolve(__dirname, './data/users.json'), JSON.stringify(req.users), (err) => {
        if (err) console.log('Failed to write');
        else console.log('User Saved');
      });
      res.send('done');
});

module.exports = router