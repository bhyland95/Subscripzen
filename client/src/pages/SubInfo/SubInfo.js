<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> d208b3ae1bc276c05c8c68495e45af61317bdc54
import {useRouteMatch} from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_SUB } from '../../utils/queries';
import { REMOVE_SUB } from '../../utils/mutations';
import moment from "moment"


const SubInfo= () => {
  const {params} = useRouteMatch()
  console.log(params.id)
  const { loading, data } = useQuery(QUERY_SUB, {
      variables: {id: params.id}
  });
  const subscription = data?.subscription || {}
const [removeSubscription, {error}] = useMutation(REMOVE_SUB)

// var given = loading?moment():moment(data.subscription.addDate, "DD-MM-YYYY");
// var current = moment().startOf('day');

// var nextCharge = loading?moment():moment(data.subscription.nextCharge, "DD-MM-YYYY");
// //Difference in number of days
// const numberOfDays = moment().diff(given,"days")
// const daysRemaining = moment().diff( nextCharge,"days")
// console.log(daysRemaining)
// console.log(numberOfDays)
// console.log(data)


  const handleDelete = async() => {
    await removeSubscription({
      variables: {_id: params.id}
    })
    window.location.replace("/home")
  }
    return (
      <>
   <h1></h1>
   {loading?"loading..":
   <ul>
     <li>Name: {data.subscription.name}</li>
     <li>Amount: {data.subscription.amount}</li>
     <li>Next Charge Date: {data.subscription.nextCharge}</li>
     <li><button onClick={handleDelete}>Remove Subscription</button></li>
    </ul>}
   </>
  );
};

//<li>You've had this subscription for: {numberOfDays}</li>

export default SubInfo;