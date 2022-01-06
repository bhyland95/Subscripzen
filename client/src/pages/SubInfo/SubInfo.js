import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_SUB } from '../../utils/queries';
import { REMOVE_SUB } from '../../utils/mutations';
import DateFormat from '../../utils/dateFormat'
import moment from "moment"
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

import './SubInfo.css'

const SubInfo = () => {
  const { params } = useRouteMatch()
  console.log(params.id)
  const { loading, data } = useQuery(QUERY_SUB, {
    variables: { id: params.id }
  });
  const subscription = data?.subscription || {}
  const [removeSubscription, { error }] = useMutation(REMOVE_SUB)

  // var given = loading?moment():moment(data.subscription.addDate, "DD-MM-YYYY");
  // var current = moment().startOf('day');

  // var nextCharge = loading?moment():moment(data.subscription.nextCharge, "DD-MM-YYYY");
  // //Difference in number of days
  // const numberOfDays = moment().diff(given,"days")
  // const daysRemaining = moment().diff( nextCharge,"days")
  // console.log(daysRemaining)
  // console.log(numberOfDays)
  // console.log(data)


  const handleDelete = async () => {
    await removeSubscription({
      variables: { _id: params.id }
    })
    window.location.replace("/home")
  }
  return (
    <section>
      <div className='square-login'></div>
      <div className='square-login'></div>
      <div className='square-login'></div>
      <div className='square-login'></div>
      <div className='square-login'></div>
      <div className='square-login'></div>
      <div className='subInfo'>
        <>
          <h1></h1>
          {loading ? "loading.." :
            <ul className='subInfoList'>
              <li>Name: {data.subscription.name}</li>
              <li>Amount: {data.subscription.amount}</li>
              <li>Next Charge Date: {DateFormat(data.subscription.nextCharge)}</li>
              <br></br>
              <br></br>
              <br></br>

              <li><button onClick={handleDelete}><Icon icon="fa-solid:trash" /></button></li>
            </ul>}
        </>
      </div>
      <Link to='/home'>
        <button className='custom-btn' >
          Return
        </button>
      </Link>
    </section>
  );
};

//<li>You've had this subscription for: {numberOfDays}</li>

export default SubInfo;