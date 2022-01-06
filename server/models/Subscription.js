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
            type: String,
            default: "1/1/2022"
          
        },
        addDate: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);


// subscriptionSchema.virtual('total').get(function() {
//     return this.amount.reduce((acc, doc) => acc + doc.points, 0);
// });


const Subscription= model('Subscription', subscriptionSchema);

module.exports = Subscription;
