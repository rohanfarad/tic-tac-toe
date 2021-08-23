import React, { useState, useEffect } from "react";

const Block = (props) => {
  const [disable, setdisable] = useState(true);
  useEffect(() => {
    setdisable(true);
  }, [props.reset]);

  useEffect(() => {
    if (props.xo === "") {
      setdisable(true);
    }
  }, [props.xo]);
  return (
    <div className={props.xOroSelector ? "xturn" : "oturn"}>
      <div
        onClick={() => {
          props.xOroSend(props.id);
          setdisable(false);
          props.winner();
        }}
        className={disable ? "Block" : "noBlock"}
      >
        {props.xo}
      </div>
    </div>
  );
};
export default Block;
// {disable ?'Block':'noBlock' }
