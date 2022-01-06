import React from 'react';
import '../pages/Home/Home.css'


const total = ({ subscriptions }) => {


    const totalAmount = subscriptions.map(subscription => subscription.amount).reduce((prev, curr) => prev + curr, 0 ).toFixed(2);;

  if (!subscriptions.length) {
    return <p>0</p>;
  }

  return (
    <div className='totalAmount'>
    ${
      totalAmount
    }
  </div>



  );
};

export default total;