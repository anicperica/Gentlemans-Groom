import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SignLoginPage from "./pages/SignLoginPage/SignLoginPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/signlogin", element: <SignLoginPage/> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
