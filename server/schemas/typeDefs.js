const { gql } = require('apollo-server-express');

//ALL PLACEHOLDERS
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    subscriptions: [Subscription]
  }  

  type Subscription {
    _id: ID
    name: String
    amount: Float
    nextCharge: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
  me: User
  users: [User]
  user(username: String!): User
  subscriptions(username: String): [Subscription]
  subscription(_id: ID!): Subscription
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addSubscription( name: String!, amount: Float!, nextCharge: String!): Subscription

  }

`;

module.exports = typeDefs;
