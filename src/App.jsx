import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Gallery from "./Pages/Gallery";
import EnquiryForm from "./Pages/EnquiryForm";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="EnquiryForm" element={<EnquiryForm />} />
          <Route path="Contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
