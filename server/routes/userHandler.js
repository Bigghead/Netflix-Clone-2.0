const User    = require('../models/User.js'),
      express = require('express'),
      Router  = express.Router();


Router.post('/:userId/movies', (req, res) => {
    User.findById(req.params.userId)
        .exec()
        .then(user => {
            user.userList.push(req.body);
            return user.save();
        })
        .then((user) => {
            res.status(200).json(user.userList);
        })
        .catch(err => {
            res.send(err);
        })
});


Router.patch('/:userId/movies', (req, res) => {

    const movieId = req.body.id
    console.log('heoooo');

    User.findById(req.params.userId)
        .exec()
        .then(user => {
            const userFavs = user.userList;

            userFavs.forEach(e => {
                if (e.id === movieId) {
                    userFavs.splice(userFavs.indexOf(e), 1);
                }
            })
            return user.save();
        })
        .then(user => {
            res.status(200).json(user.userList);
        })
        .catch(err => res.send(err))
})


Router.patch('/:userId/edit', (req, res) => {
    console.log(req.body);

    const { userName, fullName, about } = req.body;

    User.findById(req.params.userId)
        .exec()
        .then(user => {
           
                 console.log(user);
            user.userSettings.newUserName = userName
            user.userSettings.fullName = fullName;
            user.userSettings.about    = about;

            return user.save();
        })
        .then( user => {
            console.log(user);
            res.status(200).json(user);
        })
        .catch( err => res.send(err))
})


module.exports = Router;