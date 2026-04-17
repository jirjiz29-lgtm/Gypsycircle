import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import { Home } from "@/src/pages/Home";
import { Trips } from "@/src/pages/Trips";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-sand selection:bg-clay selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trips" element={<Trips />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
