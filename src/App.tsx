import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import "./App.css";
import './styling/main.scss';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
