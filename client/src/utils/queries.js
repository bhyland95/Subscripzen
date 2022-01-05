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
  
export const QUERY_SUB = gql`
  query subscription($id: ID!){
    subscription(_id: $id ){
      _id
      name
      amount
     nextCharge
     
    }
  }
  `;