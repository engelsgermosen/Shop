import { Outlet } from "react-router";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
