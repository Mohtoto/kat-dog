import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Gallery from "./Pages/Gallery";
import EnquiryForm from "./Pages/EnquiryForm";
import ContactUs from "./Pages/ContactUs";
import ConfirmationPage from "./Pages/ConfirmationPage";


const App = () => {
  return (
    <Router>
        <Nav />
       
      <div className="flex flex-col">
        <div className="min-h-[calc(100vh-81px-168px)]">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="Gallery" element={<Gallery />} />
            <Route path="EnquiryForm" element={<EnquiryForm />} />
            <Route path="Contactus" element={<ContactUs />} />
            <Route path="ConfirmationPage" element={<ConfirmationPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
