import Navbar from "./Components/Centre/Navbar";
import Centreform from "./Pages/Centre.form";
import ESExamCentreform from "./Pages/ES.Exam.Centre.form";
import ESform from "./Pages/ES.form";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/centreform",
      element: <><Navbar/><Centreform/></>
    },
    {
      path: "/",
      element: <><Navbar/><ESExamCentreform/></>
    },
    {
      path: "/",
      element: <><Navbar/><ESform/></>
    },
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}
