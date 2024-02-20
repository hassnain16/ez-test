//@ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./routing/AppRoutes.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./modules/auth/index.ts";
import "./global.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
