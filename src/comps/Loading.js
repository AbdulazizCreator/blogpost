import React from 'react'
import { Spinner } from 'reactstrap';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center py-3">
      <Spinner className='mx-1' color="warning" type="grow">
        Loading...
      </Spinner>
      <Spinner className='mx-1' color="warning" type="grow">
        Loading...
      </Spinner>
      <Spinner className='mx-1' color="warning" type="grow">
        Loading...
      </Spinner>
    </div>
  );
}

export default Loading
