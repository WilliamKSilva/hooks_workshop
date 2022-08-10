import { useRef } from "react";
import { Button } from "../../components/Button";
import { Input, Wrapper } from "./styles";

/*
useRef
O useRef poder ser utilizado para armazenar
uma referência de um elemento presente na DOM
em uma variável. Armazenar uma referência pode
ser útil quando precisamos lidar com algum
elemento específico, sendo o objeto Ref um objeto
mutável que pode conter qualquer tipo de valor.
*/

export default function Ref() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Wrapper>
      <Input ref={inputRef} name="password" placeholder="Senha..." />
      <Button title="Focar" onClick={() => inputRef.current?.focus()} />
    </Wrapper>
  )
}