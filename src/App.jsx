
import React from "react";
import { BrowserRouter,Routes,Route,Navigate,} from "react-router-dom";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";
import { Login, Register } from "./pages/Auth";
import { FarmerDashboard,FarmerListings, AddProduce,} from "./pages/FarmerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
import TransporterDashboard, { DeliveryJobs,} from "./pages/TransporterDashboard";
import DeliveryTracking from "./pages/DeliveryTracking";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";

 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      
        <Route
          path="/farmer/dashboard"
          element={<FarmerDashboard />}
        />
        <Route
          path="/farmer/listings"
          element={<FarmerListings />}
        />
        <Route
          path="/farmer/add-produce"
          element={<AddProduce />}
        />

        
        <Route
          path="/buyer/dashboard"
          element={<BuyerDashboard />}
        />

        <Route
          path="/transporter/dashboard"
          element={<TransporterDashboard />}
        />
        <Route
          path="/transporter/jobs"
          element={<DeliveryJobs />}
        />

  
        <Route
          path="/delivery-tracking"
          element={<DeliveryTracking />}
        />

        {/* Other */}
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />

        
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

