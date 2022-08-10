import Logo from '../../assets/react.svg';
import { Content, Header, Title, Wrapper } from "./styles";
import { Link } from 'react-router-dom';


// O que é um hook?
// Um hook é uma "função especial" providenciada pelo próprio React
// que nos proporciona diretamente algumas funcionabilidades essenciais
// que utilizaremos em basicamente todo App construído com React;

export default function Home() {
  return (
    <Wrapper>
      <Header>
        <img src={Logo} />
        <Title>React Hooks</Title>
      </Header>
      <Content>
        <Link to="/state">
          <strong>useState</strong>
        </Link>
        <Link to="/effect">
          <strong>useEffect</strong>
        </Link>
        <Link to="/ref">
          <strong>useRef</strong>
        </Link>
        <Link to="/callback">
          <strong>useCallback</strong>
        </Link>
        <Link to="/memo">
          <strong>useMemo</strong>
        </Link>
      </Content>
    </Wrapper>
  );
};
