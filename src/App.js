import { HashRouter, Route } from "react-router-dom";
import Dashboard from "./pages/admin-pages/Dashboard";
import Profile from "./pages/admin-pages/Profile";
import Trees from "./pages/admin-pages/Trees";
import Vegetables from "./pages/admin-pages/Vegetables";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/user-pages/Home";
import Farm from "./pages/user-pages/Farm";
import RegistrationForm from "./pages/RegistrationForm";
import Orders from "./pages/user-pages/Orders";
import Adoptions from "./pages/user-pages/Adoptions";
import ProtectedFarmerRoute from "./components/protected-routes/ProtectedFarmerRoute";
import ProtectedCustomerRoute from "./components/protected-routes/ProtectedCustomerRoute";
import AllVegetables from "./pages/user-pages/AllVegetables";
import AllTrees from "./pages/user-pages/AllTrees";
import Explore from "./pages/user-pages/Explore";
import Cart from "./pages/user-pages/Cart";

function App() {
  return (
    // HashRouter is used to solve error 404 caused by Github Pages not supporting Single page apps
    <HashRouter>
      <Route path="/" exact component={RegistrationForm} />
      <ProtectedFarmerRoute path="/profile" component={Profile} />
      <ProtectedFarmerRoute path="/dashboard" component={Dashboard} />
      <ProtectedFarmerRoute path="/vegetables" component={Vegetables} />
      <ProtectedFarmerRoute path="/trees" component={Trees} />

      <ProtectedCustomerRoute path="/home" component={Home} />
      <ProtectedCustomerRoute path="/explore" component={Explore} />
      <ProtectedCustomerRoute path="/farm/:farmId" component={Farm} />
      <ProtectedCustomerRoute path="/all-vegetables" component={AllVegetables} />
      <ProtectedCustomerRoute path="/all-trees" component={AllTrees} />
      <ProtectedCustomerRoute path="/orders" component={Orders} />
      <ProtectedCustomerRoute path="/adoptions" component={Adoptions} />
      <ProtectedCustomerRoute path="/cart" component={Cart} />
    </HashRouter>
  );
}

export default App;
