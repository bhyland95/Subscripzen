const { Category } = require('../models');


//PLACEHOLDER TO TEST SERVER
const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        }
    }
};
// FEEL FREE TO DELETE AND ADD NEW ONE

module.exports = resolvers;
