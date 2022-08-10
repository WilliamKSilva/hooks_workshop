import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import GlobalStyles from './styles/global';
import {
  BrowserRouter,
} from "react-router-dom";
import Router from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </>
  )
}

export default App
