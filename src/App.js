import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Shop from "./components/shop/Shop";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
