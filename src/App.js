import Home from "./pages/Home";
import PostCreate from "./pages/PostCreate";
import PostDetail from "./pages/PostDetail";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/post/create" element={<PostCreate />}></Route>
        <Route path="/post/detail" element={<PostDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
