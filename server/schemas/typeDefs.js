const { gql } = require('apollo-server-express');

//ALL PLACEHOLDERS
const typeDefs = gql`
  type Subscription {
    _id: ID
    name: String
    amount: Float
    nextCharge: String
  }

  type Query {
    subscriptions: [Subscription]
  }

  type Mutation {
    addSubscription( name: String!, amount: Float!, nextCharge: String!): Subscription
  }

`;

module.exports = typeDefs;
