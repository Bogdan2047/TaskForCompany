import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/login/login";
import { useSelector } from "react-redux";
import { Home } from "./pages/home/home";

function App() {
  const { user } = useSelector((state) => state.authReducer);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {user ? (
            <Route path={"/"} element={<Home />} />
          ) : (
            <Route path={"/"} element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
