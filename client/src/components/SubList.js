import React from 'react';
import { Link } from 'react-router-dom';


const subList = ({ subscriptions }) => {


  if (!subscriptions.length) {
    return <h3>No Subscriptions Yet</h3>;
  }

  return (
    <div>
      <h3>My Subscriptions</h3>
      {subscriptions &&
        subscriptions.map(subscription => (
          <div key={subscription._id} >
            <p>{subscription.name}</p>
            <p>{subscription.amount}</p>
            <p>{subscription.nextCharge}</p>
          </div>
        ))}
    </div>

  );
};

export default subList;
