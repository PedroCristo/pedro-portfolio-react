import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeEn from "./pages/pages-en/HomeEn";
import HomePt from "./pages/pages-pt/HomePt";
import ThanksPageEn from "./pages/pages-en/ThanksPageEn";
import ThanksPagePt from "./pages/pages-pt/ThanksPagePt";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeEn />,
  },
  {
    path: "/home-pt",
    element: <HomePt />,
  },
  {
    path: "/thanks-page-en",
    element: <ThanksPageEn />,
  },
  { 
    path: "/thanks-page-pt", 
    element: <ThanksPagePt /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
