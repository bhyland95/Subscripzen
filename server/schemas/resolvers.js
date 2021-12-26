const { Subscription } = require('../models');


//PLACEHOLDER TO TEST SERVER
const resolvers = {
    Query: {
        subscriptions: async () => {
            return await Subscription.find();
        }
    },
    Mutation: {
        addSubscription: async (parent, args) => {
            const subscription = await Subscription.create(args);

            return subscription;
        }
    }
};


module.exports = resolvers;
