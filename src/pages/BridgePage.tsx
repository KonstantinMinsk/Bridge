import { Typography } from '@material-ui/core';
import React from 'react';
import Play from '../components/Play/Play';
import { useFetchDeskID } from '../hooks/react-query';

const BridgePage = () => {
  const queryInfo = useFetchDeskID();

  return queryInfo.isLoading ? (
    <Typography>Loading ...</Typography>
  ) : (
    <Play dataFetchDeskID={queryInfo.data?.data} />
  );
};
export default BridgePage;
