import React from "react";
import { useParams } from "react-router-dom";

const ConditionalRoute = ({
  FirstComponent,
  SecondComponent,
  condition = false,
}) => {
  const id = useParams()?.postId;

  condition = id;
  return (
    // <>{condition ? <SecondComponent id={id} style /> : <FirstComponent />}</>
    <>
      <FirstComponent style={condition ? { display: "none" } : undefined} />
      {id && <SecondComponent id={id} />}
    </>
  );
};

export default ConditionalRoute;
