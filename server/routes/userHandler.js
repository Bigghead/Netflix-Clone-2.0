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
})


module.exports = Router;