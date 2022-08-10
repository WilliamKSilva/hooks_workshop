import { Route, Routes } from "react-router-dom";
import Callback from "../pages/Callback";
import Effect from "../pages/Effect";
import Home from "../pages/Home";
import Memo from "../pages/Memo";
import Ref from "../pages/Ref";
import State from "../pages/State";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/state" element={<State />} />
      <Route path="/effect" element={<Effect />} />
      <Route path="/ref" element={<Ref />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/memo" element={<Memo />} />
    </Routes>
  )
}