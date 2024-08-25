import { Routes } from "./routes/Router";
import { CssBaseline } from "@mui/material";
import "./style.scss";
function App() {
  return (
    <>
      <div className="app">
        <CssBaseline />
        <Routes />
      </div>
    </>
  );
}
export default App;
