import Home from "./pages/Home";
import PostCreate from "./pages/PostCreate";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/post/create" element={<PostCreate />}></Route>
      </Routes>
    </div>
  );
}

export default App;
