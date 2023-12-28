import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}></Route>å
      </Routes>
    </div>
  );
}

export default App;
