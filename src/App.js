import { useEffect, useState } from "react";
import { getPosts } from './api';
import './App.css';
// import AutorenewIcon from '@mui/icons-material/Autorenew';
// import styled from '@emotion/styled';
// import { css } from '@emotion/react';
// import { Button } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setData(response.data))
      .catch(error => setError(error));
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;


 