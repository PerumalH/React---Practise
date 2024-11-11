import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Root from "./Pages/Root";
import Errorpage from "./Pages/Errorpage";
import ProductDetailPage from "./Pages/ProductDetailPage";

// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/Product" element={<Product />} />
//   </Route>
// );
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product",
        element: <Product />,
      },
      { path: "product/:ProductId", element: <ProductDetailPage /> },
    ],
  },
]);

// const router = createBrowserRouter(routeDefinition);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
