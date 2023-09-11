import React from 'react';
import { useRouteError } from 'react-router-dom';

function Error() {

    const err = useRouteError()
    console.log(err)
  return (
    <div>
      <h1>OOps!!!!</h1>
     <h2> Something went wrong!!! . </h2>
     <h3>{err.status} {err.statusText}</h3>
     <p style={{color:"red"}}>{err.data}</p>
    </div> 
  );
}

export default Error;
