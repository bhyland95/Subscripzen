import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import dateFormat from '../../utils/dateFormat'
import { UPDATE_SUB } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import './SubList.css'

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



  useEffect(()=>console.log(subscriptions),[subscriptions])
  

  if (!subscriptions.length) {
    return null
  }

  return (
    <div>

      {[...subscriptions] &&
        [...subscriptions].sort(byDate).map(subscription => (
          <Link to={`/SubInfo/${subscription._id}`} className='links'>
            <div key={subscription._id} className='sublistContainer' >
              <p className='subscriptionName'>{subscription.name}</p>
              <p className='subscriptionAmount'>${subscription.amount}</p>
              <p className='subscriptionDate'>{dateFormat(subscription.nextCharge)}</p>
            </div>
          </Link>
        ))
      }

    </div>

  );
};

export default SubList;