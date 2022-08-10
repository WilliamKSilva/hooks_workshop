import { useEffect, useMemo, useState } from "react";
import { Content, Wrapper } from "./styles";

interface ICats {
  id: string;
}

export default function Memo() {
  const [catsData, setCatsData] = useState<ICats[]>([]);

  useEffect(() => {
    (async function getData() {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
      const json = await response.json();
      setCatsData(json);
    })()
  }, [])

  function getIdStartedWithA() {
    const data: string[] = [];

    catsData.forEach((cat) => {
      if (cat.id[0].toLowerCase() === "a") {
        data.push(cat.id);
      }
    })

    return data;
  };

  const dataId = useMemo(() => getIdStartedWithA(), [catsData]);

  return (
    <Wrapper>
      <Content>
        {dataId.length > 0 ? dataId.map((id, index) => (
          <strong key={index}>{id}</strong>
        )) : (
          <strong>Nenhuma palavra começa com A</strong>
        )}
      </Content>
    </Wrapper>
  )
}