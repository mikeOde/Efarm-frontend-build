import { Route, Switch } from "react-router-dom";
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
import ProtectedFarmerRoute from "./components/protected-routes/ProtectedCustomerRoute";
import ProtectedCustomerRoute from "./components/protected-routes/ProtectedFarmerRoute";

function App() {
  return (
    <Switch>
      <Route path="/efarm" exact component={RegistrationForm} />

      <ProtectedFarmerRoute path="https://mikeode.github.io/efarm/profile" component={Profile} />
      <ProtectedFarmerRoute path="https://mikeode.github.io/efarm/dashboard" component={Dashboard} />
      <ProtectedFarmerRoute path="https://mikeode.github.io/efarm/vegetables" component={Vegetables} />
      <ProtectedFarmerRoute path="https://mikeode.github.io/efarm/trees" component={Trees} />
      <ProtectedCustomerRoute path="https://mikeode.github.io/efarm/home" component={Home} />
      <ProtectedCustomerRoute path="https://mikeode.github.io/efarm/farm/:farmId" component={Farm} />
      {/* <Route path="/farm/:farmId">
        <Farm />
      </Route> */}
      <ProtectedCustomerRoute path="https://mikeode.github.io/efarm/orders" component={Orders} />
      <ProtectedCustomerRoute path="https://mikeode.github.io/efarm/adoptions" component={Adoptions} />
      
    </Switch>
  );
}

export default App;
