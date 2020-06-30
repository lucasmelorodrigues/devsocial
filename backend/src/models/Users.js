const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
            },
            bio: String,
            avatar: {
                type: String,
                require: true,
            },
}, {
    timestamps: true,
});

module.exports = model('User', DevSchema);