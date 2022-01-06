import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {useRouteMatch} from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { QUERY_SUB } from '../../utils/queries';


const SubInfo= () => {
  const {params} = useRouteMatch()
  const { data: subData} = useQuery(QUERY_SUB, {
      variables: {id: params.id}
  });

//   const { loading, data } = useQuery(QUERY_THOUGHT, {
//     variables: { id: thoughtId }
//   });


    return (
   <h1>Hello</h1>
  );
};

export default SubInfo;
