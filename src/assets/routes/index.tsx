import { MainLayout } from "layouts/MainLayout/MainLayout";
import RequireAuth from "layouts/requireAuth";
import InvoicesCreate from "pages/invoices/InvoicesCreate/InvoicesCreate";
import InvoicesDraft from "pages/invoices/InvoicesDraft/InvoicesDraft";
import InvoicesManagement from "pages/invoices/InvoicesManagement";
import { Navigate, useRoutes } from "react-router-dom";

const Routes = () => {
  const routes = useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          element: <RequireAuth />,
          children: [
            {
              path: "/home",
              element: <></>,
            },
            {
              path: "/invoices",
              element: <InvoicesManagement />,
            },
            {
              path: "/invoices/create",
              element: <InvoicesCreate />,
            },
            {
              path: "/invoices/drafts",
              element: <InvoicesDraft />,
            },
            {
              path: "/*",
              element: <InvoicesManagement />,
            },
          ],
        },
      ],
    },
    {
      path: "/invoices",
      element: <InvoicesManagement />,
    },
    {
      path: "/*",
      element: <Navigate to="/invoices" />,
    },
  ]);
  return routes;
};

export default Routes;
