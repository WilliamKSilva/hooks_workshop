import { useState } from "react";
import { Button } from "../../components/Button";
import { Content, Wrapper, WrapperButton } from "./styles";

// Para que serve o useState?
// Pense no state (estado) como valores atuais da aplicação
// em determinado momento, quando é necessário atualizar
// algum elemento/valor na UI do App conseguimos utilizar esse
// hook para facilmente fazer essa mudança e renderizar
// o elemento novamente na tela. 

export default function State() {
  const [count, setCount] = useState(1);
  const [example, setExample] = useState(false);

  // Quando o setCount é chamado o elemento é renderizado
  // novamente na tela, para assim trazer as mudanças que
  // atribuímos a esse estado anteriormente

  console.log('renderizou')

  return example ? (
    <Wrapper>
      <Content>
        <strong>Contador: </strong>
        <span>{count}</span>
      </Content>
      <WrapperButton>
        <Button title="Incrementar" onClick={() => setCount(count => count + 1)} />
        <Button title="Decrementar" onClick={() => setCount(count => count - 1)} />
      </WrapperButton>
    </Wrapper>
  ) : (
    <Wrapper>
      <WrapperButton>
        <Button title="Exemplo" onClick={() => setExample(true)} />
      </WrapperButton>
    </Wrapper>
  )
}