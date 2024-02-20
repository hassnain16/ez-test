import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import { Outlet } from "react-router-dom";
import { AuthInit } from "./modules/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./pages/Loading";
const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AuthInit>
        <RecoilRoot>
          <Outlet />
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="light"
          />
        </RecoilRoot>
      </AuthInit>
    </Suspense>
  );
};

export { App };
