import React, { useEffect, useState } from 'react';
import dateFormat from '../../utils/dateFormat'
import { UPDATE_SUB } from '../../utils/mutations';
import { useMutation } from '@apollo/client';


const SubList = ({ subscriptions }) => {


  const [updateSub, { error }] = useMutation(UPDATE_SUB);

  const today = new Date()



  function byDate(a, b) {
    return new Date(a.nextCharge) - new Date(b.nextCharge)
  }

  function beforeToday(a) {
    return (today - new Date(a.nextCharge)) >= 1
  }


  let filteredSubscriptions = JSON.parse(JSON.stringify([...subscriptions].filter(beforeToday)))

  if (filteredSubscriptions.length) {

    for (var i = 0; i < filteredSubscriptions.length; i++) {
      var timestamp = new Date(filteredSubscriptions[i].nextCharge)
      timestamp = dateFormat(timestamp.setMonth(timestamp.getMonth() + 1));

      filteredSubscriptions[i].nextCharge = timestamp
      //call mutation 

      updateSub({
        variables: { ...filteredSubscriptions[i] }
    })

      
    }

  }

  



  if (!subscriptions.length) {
    return <h3>No Subscriptions Yet</h3>;
  }

  return (
    <div>
      <h3>My Subscriptions</h3>
      {[...subscriptions] &&
        [...subscriptions].sort(byDate).map(subscription => (
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