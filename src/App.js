import { Route, Routes } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";
import MyPage from "./Pages/MyPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import CartPage from "./Pages/CartPage";
import { AuthProvider } from "./contexts/auth.context";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/my-page" element={<MyPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="/products/:productId"
              element={<ProductDetailPage />}
            />
          </Route>
        </Routes>
      </AuthProvider>
    </Provider>
  );
}

export default App;
