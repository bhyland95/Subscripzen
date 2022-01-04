const db = require('../config/connection');
const { User, Subscription } = require('../models');

db.once('open', async () => {
    await Subscription.deleteMany({});
    await User.deleteMany({});

    const userData = []

    for (let i=0; i<50; i=+1) {
        const username = userName();
        const email = email(userName);
        const password = password();

        userData.push({ username, email, password });
    }
})