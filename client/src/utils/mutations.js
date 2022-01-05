import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_SUB = gql`
  mutation addSubscription($name: String!, $amount: Float!, $nextCharge: String!) {
    addSubscription(name: $name, amount: $amount, nextCharge: $nextCharge) {
      _id
      name
      amount
      nextCharge
    }
  }
`

export const UPDATE_SUB = gql`
mutation updateSubscription($_id: ID!, $name: String!, $amount: Float!, $nextCharge: String!) {
  updateSubscription( _id: $_id, name: $name, amount: $amount, nextCharge: $nextCharge) {
    _id
    name
    amount
    nextCharge
  }
}
`
