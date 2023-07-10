import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";

function App() {

  return (
    <div className="h-screen">
      <div className="h-full bg-body grid grid-cols-5 divide-x divide-gray-800">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="h-full absolute top-0 left-0 w-full overflow-hidden"><RouterProvider router={router}></RouterProvider></div>
    </div>
  );
}

export default App;
