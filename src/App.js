import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import Loader from "./component/Loader/Loader";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div className="relative bg-body">
      {
        loading ? <Loader /> : <div>
          <div className="h-screen grid grid-cols-5 divide-x divide-gray-800">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {/* <div className="h-auto absolute top-0 left-0 w-full overflow-hidden"><RouterProvider router={router}></RouterProvider></div> */}

          <div className="absolute top-0 left-0 w-full text-white overflow-hidden max-h-screen">
            <div className=""><RouterProvider router={router}></RouterProvider></div>
          </div>
        </div>
      }
    </div>

  );
}

export default App;
