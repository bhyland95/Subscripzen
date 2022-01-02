import React, {useEffect, useState} from 'react';



const SubList = ({ subscriptions }) => {

const [currentSubscriptions, setCurrentSubscriptions] = useState( [ ... subscriptions] )

function byDate(a, b) {
  return new Date(a.nextCharge) - new Date(b.nextCharge)
}



  if (!subscriptions.length) {
    return <h3>No Subscriptions Yet</h3>;
  }

  return (
    <div>
      <h3>My Subscriptions</h3>
      {currentSubscriptions &&
        currentSubscriptions.sort(byDate).map(subscription => (
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

export default SubList;