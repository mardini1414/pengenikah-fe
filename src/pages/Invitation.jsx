import React, { useEffect, useState } from 'react';
import MainTheme from '../themes';
import { useParams, useSearchParams } from 'react-router-dom';
import LoadingPage from '../common/components/LoadingPage';

function Invitation() {
  const [data, setData] = useState();
  const { slug } = useParams();
  const [query, setQuery] = useSearchParams();
  const res = {
    theme: 'theme_v1',
    slug,
    to: query.get('to'),
  };

  function getData() {
    setTimeout(() => {
      setData(res);
    }, 3000);
  }

  useEffect(() => {
    getData();
  }, []);

  return !!data ? <MainTheme data={data} /> : <LoadingPage />;
}

export default Invitation;
