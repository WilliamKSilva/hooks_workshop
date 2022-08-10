import { ButtonHTMLAttributes } from "react";
import { Wrapper } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
}

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <Wrapper {...rest}>
      <strong>{title}</strong>
    </Wrapper>
  );
};
