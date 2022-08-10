import React from "react";

type CounterProps = {
  increment: () => void;
};

export const Counter = React.memo(({ increment }: CounterProps) => {

  console.log("render");

  return <button onClick={() => increment()}>Incrementar</button>
});