import { useEffect, useState } from "react";
import { Wrapper } from "./styles";

type ExampleOne = {
  isChosed: boolean;
};

interface ICats {
  id: string;
  url: string;
};

export const ExampleOne = ({ isChosed }: ExampleOne) => {
  const [catsData, setCatsData] = useState<ICats[]>([]);

  useEffect(() => {
    (async function getCats() {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
      const json = await response.json();
      setCatsData(json);
    })();
  }, [])

  return isChosed ? (
    <Wrapper>
      {catsData.map((cat) => (
        <img id={cat.id} src={cat.url} />
      ))}
    </Wrapper>
  ) : null;
}