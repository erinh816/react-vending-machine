import { Route, Routes } from "react-router-dom";
import Snickers from "./Snickers";
import GummyWorms from "./GummyWorms";
import Cookies from "./Cookies";
import VendingMachine from "./VendingMachine";


function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<VendingMachine />} />
      <Route path="/snickers" element={<Snickers />} />
      <Route path="/gummy-worms" element={<GummyWorms />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="*" element={<div>We don't have this snack</div>} />
    </Routes>
  );


}

export default RoutesList;
