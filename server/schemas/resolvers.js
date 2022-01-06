const { User, Subscription } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('subscriptions');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },


        subscriptions: async () => {

            // const Subs = await Subscriptions.find()
            return Subscription.find()
        },
        subscription: async (parent, { _id }) => {
            return Subscription.findOne({ _id });
        },
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('subscriptions');
        },
        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('subscriptions');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addSubscription: async (parent, args, context) => {
            if (context.user) {
                const subscription = await Subscription.create({ ...args, username: context.user.username });

                console.log(subscription)

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { subscriptions: subscription } },
                    { new: true }
                );

                return subscription;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        updateSubscription: async (parent, { _id, name, amount, nextCharge}) => {
      
            return await Subscription.findByIdAndUpdate(_id, { name, amount, nextCharge }, { new: true });
          },
       
    }
};

module.exports = resolvers;