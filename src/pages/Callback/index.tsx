import { useCallback, useEffect, useState } from "react";
import { Counter } from "./Counter";
import { Content, Wrapper } from "./styles";

export default function Callback() {
  const [count, setCount] = useState(1);

  const increment = useCallback(() => {
    setCount(count => count + 1);
  }, [setCount]);

  // useEffect(() => {

  // }, [increment])

  return (
    <Wrapper>
      <Content>
        <Counter increment={increment} />
        <strong>
          O número atual é: <span>{count}</span>
        </strong>
      </Content>
    </Wrapper>
  )
}