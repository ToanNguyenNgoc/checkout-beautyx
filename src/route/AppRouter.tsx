import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, CheckoutPayment } from "../pages";

function AppRouter() {
  const router = createBrowserRouter([
    { path: '/checkout-payment', element: <CheckoutPayment /> },
    { path: '/', element: <Home /> }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default AppRouter;