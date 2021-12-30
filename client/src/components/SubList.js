import React from 'react';



const subList = ({ subscriptions }) => {

function byDate(a, b) {
  return new Date(a.nextCharge).valueOf() - new Date(b.nextCharge).valueOf();
}

  // console.log(subscriptions.sort(byDate))

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
        ))
        }

    </div>

  );
};

export default subList;
