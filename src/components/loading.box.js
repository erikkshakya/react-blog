import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingBox = () => {
  return (
    <div>
      <Spinner animation="grow" variant="danger" />
    </div>
  );
};

export default LoadingBox;
