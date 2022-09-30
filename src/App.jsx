import { Navbar } from "@components/Navbar";
import { Button } from "@components/Button";
import { RoutesApp } from "./routers";
import "@styles/global.css";
import "@styles/vars.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Button />
      <RoutesApp />
    </div>
  );
}

export default App;
