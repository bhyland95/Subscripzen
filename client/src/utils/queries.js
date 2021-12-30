import { gql } from 'graphql-tag';

export const QUERY_ME = gql`
query {
    me {
      _id
      username
      email
      subscriptions {
        _id
        name
        amount
        nextCharge
      }
    }
  }
  `;