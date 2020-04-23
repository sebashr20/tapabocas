import React from 'react';

// reactstrap components
import { Alert } from 'reactstrap';

const MainAlert = (props) => {
  const { text, color } = props;
  return (
    <Alert
      color={color}
      className="text-center"
      // style={{
      //   position: '-webkit-sticky',
      //   position: 'sticky',
      //   top: '0px',
      //   zIndex: '10',
      // }}
    >
      <p style={{ fontSize: '20px' }} className="my-0">
        {text}
      </p>
    </Alert>
  );
};

export default MainAlert;
