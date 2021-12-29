import { gql } from 'graphql-tag';

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
  `;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
        user {
          email
      }
    }
  }
  `;

export const ADD_SUBSCRIPTION = gql`
mutation addSubscription($name: String!, $amount: Float!, $nextCharge: String!) {
  addSubscription(name: $name, amount: $amount, nextCharge: $nextCharge) {
    _id
    name
    amount
    nextCharge
  }
}
`;

export const REMOVE_SUBSCRIPTION = gql`
`;
