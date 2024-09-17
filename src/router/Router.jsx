import { createBrowserRouter } from "react-router-dom";
import {Layout, Home} from "../router/index.js";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
      ]
    },
  ]);

  export default router;