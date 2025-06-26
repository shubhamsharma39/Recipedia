import { useEffect, useState } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Login from "./components/Login";
import RestaurantMenu from "./components/RestaurantMenu";
import CartPage from "./components/CartPage";

import appStore from "./utils/appStore";
import UserContext from "./utils/UserContext";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName("Shubham Sharma");
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ name: userName, setUserName }}>
        <Toaster position="top-right" />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
]);

export default App;
