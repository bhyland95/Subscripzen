import React from 'react';



const total = ({ subscriptions }) => {


    const totalAmount = subscriptions.map(subscription => subscription.amount).reduce((prev, curr) => prev + curr, 0 );

  if (!subscriptions.length) {
    return <h3>0</h3>;
  }

  return (
    <div>
    {
      totalAmount
    }
  </div>



  );
};

export default total;
