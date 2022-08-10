import React, { useEffect, useState } from "react";
import { Content, Input, Wrapper } from "./styles";

type ExampleTwo = {
  isChosed: boolean;
  setIsChosed: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ExampleTwo({ isChosed, setIsChosed }: ExampleTwo) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    document.title = inputValue;
  }, [inputValue])

  return isChosed ? (
    <Wrapper>
      <Content>
        <Input
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Texto..."
        />
      </Content>
    </Wrapper>
  ) : null;
}
