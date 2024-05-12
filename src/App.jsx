import { Navigate, Route, Routes } from "react-router-dom";
import ProuductsPage from "./pages/ProuductsPage";
import DetailPage from "./pages/DetailPage";
import CheckOutPage from "./pages/CheckOutPage";
import PageNotFound from "./pages/404Page";

import LayOut from "./layOut/LayOut";

function App() {
  return (
    <>
      <LayOut>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProuductsPage />} />
          <Route path="/products/:id" element={<DetailPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </LayOut>
    </>
  );
}

export default App;
