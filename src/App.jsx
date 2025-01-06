import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
