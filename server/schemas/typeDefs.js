// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
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
    addDate: String
  }
  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }
  type Auth {
    token: ID!
    user: User
  }



  type Query {
    me: User
    users: [User]
    user(username: String!): User
    subscriptions( username: String): [Subscription]
    subscription(_id: ID!): Subscription
  }


  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
<<<<<<< HEAD
    addSubscription( name: String!, amount: Float!, nextCharge: String!): Subscription
    removeSubscription( _id: ID!): User

=======
    addSubscription( name: String!, amount: Float!, nextCharge: String!, addDate: String): Subscription
    updateSubscription( _id: ID, name: String, amount: Float, nextCharge: String): Subscription
>>>>>>> 39559fce7f2cc6d4da65293d854f38cf1d22fe34
  }
`;

module.exports = typeDefs;