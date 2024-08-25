import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/routes";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster richColors />
        <RouterProvider router={router}></RouterProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
