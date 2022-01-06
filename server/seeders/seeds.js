const faker = require('faker');

const db = require('../config/connection');
const { User, Subscription } = require('../models');

db.once('open', async () => {
    await Subscription.deleteMany({});
    await User.deleteMany({});

    const userData = []

    for (let i=0; i<50; i=+1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();
        //const subscriptions = subscriptions();

        userData.push({ username, email, password });
    }
    await User.collection.insertMany(userData);

    const createdUsers = await User.collection.insertMany(userData);
    
    // let createdSubscriptions = [];
    // let createdSubscriptions = Math.floor(Math.random() * createdUsers.ops.length);
    // const { username, _id: userId } = createdUsers.ops[randomUserIndex]
    
    // const created

    console.log('all done!');
    process.exit(0);
})