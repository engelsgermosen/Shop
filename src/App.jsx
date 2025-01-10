import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
