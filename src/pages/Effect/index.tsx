import { useState } from "react";
import { Button } from "../../components/Button";
import { ExampleOne } from "./ExampleOne";
import { ExampleTwo } from "./ExampleTwo";
import { Content, Wrapper } from "./styles";

/*
useEffect
O nome do hook já fala por si mesmo
pense no useEffect como um tipo de
"efeito", quando você precisa chamar um
método ou algum tipo de ação que depende
de alguma outra dependência do App
você poderá usar o useEffect prestando
atenção sempre no array de dependêcia,
que é onde se é indicado qual dependência
do App o método a seguir estará dependendo
para ser acionado.
*/

export default function Effect() {
  const [exampleOne, setExampleOne] = useState(false);
  const [exampleTwo, setExampleTwo] = useState(false);

  const handleExampleOne = () => {
    setExampleOne(!exampleOne);
    setExampleTwo(false);
  };

  const handleExampleTwo = () => {
    setExampleTwo(!exampleTwo);
    setExampleOne(false);
  };

  function renderExample() {
    if (exampleOne) {
      return <ExampleOne isChosed={exampleOne} />
    }

    if (exampleTwo) {
      return <ExampleTwo isChosed={exampleTwo} setIsChosed={setExampleTwo} />
    }
  }

  return (
    <Wrapper>
      <Content>
        <Button title="Exemplo 1" onClick={() => handleExampleOne()} />
        <Button title="Exemplo 2" onClick={() => handleExampleTwo()} />
      </Content>
      {renderExample()}
    </Wrapper>
  )
}