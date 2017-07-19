const { ObjectID } = require('mongodb');
const crypt = require('../utils/encryptor');

const getData = (db) => {
    const userCollection = db.collection('users');
    return {
        userCreate(firstName, lastName, username,
                   password, email, profilePicture) {
            const salt = crypt.generateSalt();
            const passHash = crypt.generateHashedPassword(password, salt);

            let _profilePicture = {};

            if (!profilePicture.src) {
                _profilePicture = {
                    src: '/public/images/default.user.png',
                };
            } else {
                _profilePicture.src = profilePicture.src;
            }

            const user = {
                firstName,
                lastName,
                username,
                passHash,
                email,
                profilePicture: _profilePicture,
            };
            return userCollection.insertOne(user)
                .then((result) => {
                    return result;
                });
        },
        findBy(props) {
            return userCollection.findOne(props);
        },
        findById(id) {
            return userCollection.findOne(
                {
                    _id: new ObjectID(id),
                }
            )
                .then((user) => {
                    if (!user) {
                        return null;
                    }
                    user.id = user._id;
                    return user;
                });
        },
    };
};

module.exports = { getData };
