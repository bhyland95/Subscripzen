import React, {useEffect, useState} from 'react';
import dateFormat from '../../utils/dateFormat';
import './SubList.css'


const SubList = ({ subscriptions }) => {

const [currentSubscriptions, setCurrentSubscriptions] = useState( [ ... subscriptions] )


const today = new Date()


function byDate(a, b) {
  return new Date(a.nextCharge) - new Date(b.nextCharge)
}

function beforeToday(a){
  return (today - new Date(a.nextCharge)) >= 1
}


let filteredSubscriptions = [ ... subscriptions].filter(beforeToday)


for(var i = 0; i < filteredSubscriptions.length; i++){
var timestamp = new Date(filteredSubscriptions[i].nextCharge)
timestamp = dateFormat(timestamp.setMonth(timestamp.getMonth() + 1));


console.log(timestamp)
}


console.log(filteredSubscriptions)




  if (!subscriptions.length) {
    return <h3>No Subscriptions Yet</h3>;
  }

  return (
    <div>
      <h3>My Subscriptions</h3>
      {currentSubscriptions &&
        currentSubscriptions.sort(byDate).map(subscription => (
          <div className='sublistContainer' key={subscription._id} >
            <p className='subscriptionName'>{subscription.name}</p>
            <p className='subscriptionAmount'>${subscription.amount}</p>
            <br />
            <p className='subscriptionDate'>Due on: {subscription.nextCharge}</p>
          </div>
        ))
        }

    </div>

  );
};

export default SubList;