import { createHashRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { ResumeProvider } from "./context/ResumeContext";
import LayOut from "./components/ui/LayOut";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { ToastContainer } from "react-toastify";
import { ApiConfigProvider } from "./context/ConfigApiContext";


// Lazy load pages
const Login = lazy(() => import("./Pages/Login"));
const Home = lazy(() => import("./Pages/Home"));
const DashBoard = lazy(() => import("./Pages/DashBoard"));
const Resume = lazy(() => import("./Pages/Resume"));

const queryClient = new QueryClient();

function App() {
  const Router = createHashRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/login",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "/DashBoard",
          element: (
            <ProtectedRoutes>
              <Suspense fallback={<div>Loading...</div>}>
                <DashBoard />
              </Suspense>
            </ProtectedRoutes>
          ),
        },
        {
          path: "/Resume/:id",
          element: (
            <ProtectedRoutes>
              <Suspense fallback={<div>Loading...</div>}>
                <Resume />
              </Suspense>
            </ProtectedRoutes>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ResumeProvider>
            <ApiConfigProvider>
              <Suspense fallback={<div>Loading app...</div>}>
                <RouterProvider router={Router} />
              </Suspense>
              <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </ApiConfigProvider>
          </ResumeProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
