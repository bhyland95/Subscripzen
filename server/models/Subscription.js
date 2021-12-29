const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const subscriptionSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 1,
            trim: true
        },
        amount: {
            type: Number,
            default: 9.99,
            required: true
        },
        nextCharge: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    
    },
    {
        toJSON: {
            getters: true
        }
    }
);



const Subscription= model('Subscription', subscriptionSchema);

module.exports = Subscription;
