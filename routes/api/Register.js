const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');

const app = express();

const User = require('../../model/Auth');

router.post('/', (req, res) => {
    const { name, username, email, password } = req.body;
    if (!name || !username || !email || !password) {
        return res.status(400).json({ msg: 'Fill All Fields!' });
    }
    User.findOne({ username })
        .then(user => {
            if (user) {
                return res.status(400).json({ msg: 'Already Registered!' });
            }
            const newUser = new User({
                name,
                username,
                email,
                password
            });
            bcrypt.genSalt(5, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                { id: user._id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    res.json({
                                        token,
                                        user: {
                                            id: user._id,
                                            name: user.name,
                                            username: user.username
                                        }
                                    })
                                }
                            )
                        })
                })
            })
        })

})

module.exports = router;