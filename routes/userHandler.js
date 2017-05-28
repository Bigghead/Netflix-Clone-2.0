const express = require('express'),
      Router  = express.Router();


Router.post('/:userId/movies', (req, res) => {
    console.log(req.body);
    User.findById(req.params.userId)
        .exec()
        .then(user => {
            console.log(user, 'asdfashflshfalksjh')
            user.userList.push(req.body);
            return user.save();
        })
        .then((user) => {
            console.log(user);
            res.status(200).send('Success');
        })
        .catch(err => {
            res.send(err);
        })
});


Router.patch('/:userId/movies', (req, res) => {

    console.log(req.body);
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
            console.log(user);
            res.status(200).send('Success');
        })
        .catch(err => res.send(err))
})


module.exports = Router;