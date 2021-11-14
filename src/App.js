import { BrowserRouter, Routes, Route } from "react-router-dom";
import Common from "./comps/Common";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Common>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Common>
    </BrowserRouter>
  );
}

export default App;
