import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import Links from "./Links/Links";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="*" element={<Links />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
